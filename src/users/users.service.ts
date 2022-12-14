import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role-dto';
import { AddBanDto } from './dto/ban-user-dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) { }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('Admin');
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const users = await this.userRepository.findOne({ where: { email }, include: { all: true } });
    return users;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND)
  }

  async addBan(dto: AddBanDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    user.banned = true;
    user.banReason = 'Penalty'
    await user.save();
    return user;
  }

}
