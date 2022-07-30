import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { FindManyTodoArgsDto } from './dto/findManyTodoArgs.dto';
import { FindOneTodoArgsDto } from './dto/findOneTodoArgs.dto';
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

  async findAll(findManyTodoArgsDto: FindManyTodoArgsDto): Promise<Todo[]> {
    return this.prisma.todo.findMany(findManyTodoArgsDto)
  }

  async findOne(findOneTodoDto: FindOneTodoArgsDto) {
    return this.prisma.todo.findUnique(findOneTodoDto)
  }

  async update(updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update(updateTodoDto)
  }

  async remove(removeTodoDto: RemoveTodoArgsDto) {
    return this.prisma.todo.delete(removeTodoDto)
  }
}
