import { ApiProperty } from "@nestjs/swagger";
import { SortOrder } from "../../util/SortOrder";

class TodoOrderByInput {

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  published?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  title?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  content?: SortOrder;

  // @ApiProperty({
  //   required: false,
  //   enum: ["asc", "desc"],
  // })
  // uidId?: SortOrder;
}

export { TodoOrderByInput };
