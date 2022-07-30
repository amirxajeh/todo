import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import { ApiNestedQuery } from './../decorators/api-nested-query.decorator';
import { CreateTodoDto } from './dto/createTodo.dto';
import { TodoFindManyArgs } from './dto/TodoFindManyArgs';
import { TodoService } from './todo.service';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto)
  }

  @Get()
  @ApiNestedQuery(TodoFindManyArgs)
  async findAll(@Req() req: Request): Promise<Todo[]> {
    const query = plainToClass(TodoFindManyArgs, req.query)

    return await this.todoService.findAll(query)
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
