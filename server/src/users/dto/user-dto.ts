import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, ValidateNested, IsNumber } from "class-validator";
import { Type } from "class-transformer";

class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  id!: number;


  // @ApiProperty({
  //   required: true,
  //   type: [String],
  // })
  // @IsString({
  //   each: true,
  // })
  // @Field(() => [String])
  // roles!: Array<string>;

  // @ApiProperty({
  //   required: false,
  //   type: () => [Task],
  // })
  // @ValidateNested()
  // @Type(() => Task)
  // @IsOptional()
  // tasks?: Array<Task>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  username!: string;
}
export { User };
