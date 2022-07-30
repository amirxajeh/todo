import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";

class TodoCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  content?: string | null;

  // @ValidateNested()
  // @Type(() => UserWhereUniqueInput)
  // @IsOptional()
  // @Field(() => UserWhereUniqueInput, {
  //   nullable: true,
  // })
  // uid?: UserWhereUniqueInput | null;
}
export { TodoCreateInput };
