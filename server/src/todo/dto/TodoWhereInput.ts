import { ApiProperty } from "@nestjs/swagger";
import { BooleanFilter } from "../../util/BooleanFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "src/util/DateTimeNullableFilter";
import { IntFilter } from "src/util/IntFilter";
import { BooleanNullableFilter } from "src/util/BooleanNullableFilter";
import { IntNullableFilter } from "src/util/IntNullableFilter";


class TodoWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  published?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  id?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  updatedAt?: DateTimeNullableFilter;

  // @ApiProperty({
  //   required: false,
  //   type: () => UserWhereUniqueInput,
  // })
  // @ValidateNested()
  // @Type(() => UserWhereUniqueInput)
  // @IsOptional()
  // uid?: UserWhereUniqueInput;
}
export { TodoWhereInput };
