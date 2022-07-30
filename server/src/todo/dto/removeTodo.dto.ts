import { Prisma } from "@prisma/client";

export class RemoveTodoArgsDto implements Prisma.TodoDeleteArgs {
  select?: Prisma.TodoSelect;
  where: Prisma.TodoWhereUniqueInput;
}