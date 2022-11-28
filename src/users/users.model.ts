import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from '../roles/user-roles/user-roles.model';


interface UserCreationsAttrs {
  email: string;
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationsAttrs>{

  @ApiProperty({ example: '1', description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string;


  @ApiProperty({ example: '1q2w3e4r', description: 'Password' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;


  @ApiProperty({ example: 'true', description: 'Has Banned?' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  banned: boolean;

  @ApiProperty({ example: 'Penalty', description: 'Reason of ban' })
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[]
}