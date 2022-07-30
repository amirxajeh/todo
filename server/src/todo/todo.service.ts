import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { CreateTodoDto } from './dto/createTodo.dto';


@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.prisma.todo.create({
      data: createTodoDto
    })
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #id todo`;
  }

  update() {
    return `This action updates a #id todo`;
  }

  remove(id: number) {
    return `This action removes a #id todo`;
  }
}
