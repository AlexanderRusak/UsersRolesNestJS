import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '1q2w3e4r', description: 'Password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'Password should be from 4 to 16 symbols' })
  readonly password: string;
}