import { ApiProperty } from "@nestjs/swagger";

class UserWhereUniqueIdInputDto {

  @ApiProperty({
    required: true,
    type: Number
  })
  id!: number
}

export { UserWhereUniqueIdInputDto }