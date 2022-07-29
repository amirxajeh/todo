import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  create() {
  }

  @Get()
  findAll() {
  }

  @Get(':id')
  findOne() {
  }

  @Patch(':id')
  update() {
  }

  @Delete(':id')
  remove() {
  }
}
