import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Req, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import { ApiNestedQuery } from './../decorators/api-nested-query.decorator';
import { TodoCreateInput } from './dto/TodoCreateInput.dto';
import { TodoFindManyArgs } from './dto/TodoFindManyArgs.dto';
import { TodoService } from './todo.service';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTodoDto: TodoCreateInput) {
    return this.todoService.create({
      data: {
        ...createTodoDto,
        published: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
  }

  @Get()
  @ApiNestedQuery(TodoFindManyArgs)
  async findAll(@Req() req: Request): Promise<Todo[]> {
    const query = plainToClass(TodoFindManyArgs, req.query)

    return await this.todoService.findAll(query)
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const foundedTodo = await this.todoService.findOne({
      where: { id }
    })

    if (!foundedTodo) {
      throw new NotFoundException("No resource was found for id " + id)
    }

    return foundedTodo
  }

  @Patch(':id')
  update() {
  }

  @Delete(':id')
  remove() {
  }
}
