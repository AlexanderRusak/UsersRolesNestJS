import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRoleDto {

  @IsString({ message: 'Should be a string' })
  @ApiProperty({ example: 'Manager', description: 'Role' })
  readonly value: string;

  @IsNumber({}, { message: 'Should be a number' })
  @ApiProperty({ example: 'Manager can manage', description: 'Role description' })
  readonly description: string;
}