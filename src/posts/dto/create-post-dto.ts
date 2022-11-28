import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {

  @IsString({ message: 'Should be a string' })
  @ApiProperty({ example: 'Title', description: 'Title of the post' })
  readonly title: string;

  @IsString({ message: 'Should be a string' })
  @ApiProperty({ example: 'Post content', description: 'Post content description' })
  readonly content: string;

  @IsString({ message: 'Should be a string' })
  @ApiProperty({ example: 'https://url.png', description: 'Path to image' })
  readonly image: string;

  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: null;
}


