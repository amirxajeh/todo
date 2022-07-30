import { ApiProperty } from "@nestjs/swagger";
import { BooleanFilter } from "../../util/BooleanFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "src/util/DateTimeNullableFilter";


class TodoWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  published?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  id?: StringFilter;

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
