import { Prisma } from "@prisma/client";

export class CreateTodoDto implements Prisma.TodoCreateArgs {
  select?: Prisma.TodoSelect;
  data: (Prisma.Without<Prisma.TodoCreateInput, Prisma.TodoUncheckedCreateInput> & Prisma.TodoUncheckedCreateInput) | (Prisma.Without<Prisma.TodoUncheckedCreateInput, Prisma.TodoCreateInput> & Prisma.TodoCreateInput);
}
