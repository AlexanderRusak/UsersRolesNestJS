import { FilesModule } from './../files/files.module';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { PostsService } from './posts.service';
import { Post } from './posts.model';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule]
})
export class PostsModule { }
