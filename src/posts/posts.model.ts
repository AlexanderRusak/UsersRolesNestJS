import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';


interface PostCreationsAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationsAttrs>{

  @ApiProperty({ example: '1', description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: 'Title 1', description: 'Title to the post' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  title: string;


  @ApiProperty({ example: 'Lorem ipsum', description: 'Content of the title' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content: string;

  @ApiProperty({ example: 'https://url.png', description: 'Link to the image' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  image: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number

  @BelongsTo(() => User)
  author: User

}