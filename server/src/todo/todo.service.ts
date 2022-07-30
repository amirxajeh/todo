import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { RemoveTodoArgsDto } from './dto/removeTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';


@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.prisma.todo.create({
      data: createTodoDto
    })
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

  async remove(removeTodoDto: RemoveTodoArgsDto) {
    return this.prisma.todo.delete(removeTodoDto)
  }
}
