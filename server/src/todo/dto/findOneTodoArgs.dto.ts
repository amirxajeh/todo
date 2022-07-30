import { Prisma } from "@prisma/client";

export class FindOneTodoArgsDto implements Prisma.TodoFindUniqueArgs {
  rejectOnNotFound?: Prisma.RejectOnNotFound;
  select?: Prisma.TodoSelect;
  where: Prisma.TodoWhereUniqueInput;
}