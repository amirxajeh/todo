import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
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
