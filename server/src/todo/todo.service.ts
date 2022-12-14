import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from './../prisma.service';


@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create<T extends Prisma.TodoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>
  ): Promise<Todo> {
    return this.prisma.todo.create<T>(args);
  }

  async findAll<T extends Prisma.TodoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>
  ): Promise<Todo[]> {
    return this.prisma.todo.findMany(args)
  }

  async findOne<T extends Prisma.TodoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>
  ): Promise<Todo | null> {
    return this.prisma.todo.findUnique(args)
  }

  async update<T extends Prisma.TodoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>
  ): Promise<Todo> {
    return this.prisma.todo.update<T>(args);
  }

  async remove(removeTodoDto: Prisma.TodoDeleteArgs) {
    return this.prisma.todo.delete(removeTodoDto)
  }
}
