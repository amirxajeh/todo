import { ApiProperty } from "@nestjs/swagger";
import { TodoWhereInput } from "./TodoWhereInput.dto";
import { Type } from "class-transformer";
import { TodoOrderByInput } from "./TodoOrderByInput.dto";

export class TodoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TodoWhereInput,
  })
  @Type(() => TodoWhereInput)
  where?: TodoWhereInput;

  @ApiProperty({
    required: false,
    type: [TodoOrderByInput],
  })
  @Type(() => TodoOrderByInput)
  orderBy?: Array<TodoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Type(() => Number)
  take?: number;
}

