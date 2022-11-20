import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { Roles } from 'src/auth/decorators/roles-auth.decorators';
import { RolesGuard } from 'src/auth/role-guard';
import { AddRoleDto } from './dto/add-role-dto';
import { AddBanDto } from './dto/ban-user-dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }


  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }


  @ApiOperation({ summary: 'Add role' })
  @ApiResponse({ status: 200 })
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Add ban' })
  @ApiResponse({ status: 200 })
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Post('/ban')
  addBan(@Body() dto: AddBanDto) {
    return this.usersService.addBan(dto);
  }

}
