import { ApiProperty } from "@nestjs/swagger";

class UserWhereUniqueUsernameInputDto {

  @ApiProperty({
    required: true,
    type: String
  })
  username!: string
}

export { UserWhereUniqueUsernameInputDto }