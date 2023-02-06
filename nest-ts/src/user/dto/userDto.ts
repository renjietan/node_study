import { ApiHeader, ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: "姓名",
    default: 1
  })
  name: string
  @ApiProperty()
  age: number
  @ApiProperty()
  sex: number
}