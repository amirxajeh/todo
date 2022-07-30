import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

class TodoWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsString()
  id!: number;
}
export { TodoWhereUniqueInput };
