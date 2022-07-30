import { Prisma } from "@prisma/client";

export class UpdateTodoDto implements Prisma.TodoUpdateArgs {
  select?: Prisma.TodoSelect;
  data: (Prisma.Without<Prisma.TodoUpdateInput, Prisma.TodoUncheckedUpdateInput> & Prisma.TodoUncheckedUpdateInput) | (Prisma.Without<Prisma.TodoUncheckedUpdateInput, Prisma.TodoUpdateInput> & Prisma.TodoUpdateInput);
  where: Prisma.TodoWhereUniqueInput;

}