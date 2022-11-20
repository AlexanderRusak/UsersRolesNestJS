import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Manager', description: 'Role' })
  readonly value: string;

  @ApiProperty({ example: 'Manager can manage', description: 'Role description' })
  readonly description: string;
}