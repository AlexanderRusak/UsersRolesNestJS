import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles/user-roles.model';


interface RoleCreationsAttrs {
  value: string;
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationsAttrs>{

  @ApiProperty({ example: '1', description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 'Manager', description: 'Role value' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  value: string;


  @ApiProperty({ example: 'Manager can manage', description: 'Role description' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];

}