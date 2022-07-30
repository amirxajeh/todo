import { Test, TestingModule } from "@nestjs/testing"
import { Prisma } from "@prisma/client"
import { CreateTodoDto } from "./dto/createTodo.dto"
import { FindManyTodoArgsDto } from "./dto/findManyTodoArgs.dto"
import { FindOneTodoArgsDto } from "./dto/findOneTodoArgs.dto"
import { UpdateTodoDto } from "./dto/updateTodo.dto"
import { TodoService } from "./todo.service"

class MockTodoSerive {
  create(createTodoDto: any) { }
  findAll(args: any) { }
  findOne(args: any) { }
  update(args: any) { }
  remove(args: any) { }
}

describe("Todo Service", () => {
  let todoService: TodoService

  beforeAll(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: TodoService,
        useClass: MockTodoSerive
      }]
    }).compile()

    todoService = module.get<TodoService>(TodoService)
  })

  it("should call create method with expected params", () => {
    const createTodoSpy = jest.spyOn(todoService, 'create')

    const dto = new CreateTodoDto()
    dto.title = "title"
    dto.content = "content"
    dto.published = false
    dto.createdAt = new Date()
    dto.updatedAt = new Date()

    todoService.create(dto)

    expect(createTodoSpy).toHaveBeenCalledWith(dto)
  })

  it("should call findAll method wuth expected params", () => {
    const findAllTodoSpy = jest.spyOn(todoService, 'findAll')

    const args: FindManyTodoArgsDto = {
      cursor: { id: 1 },
      distinct: ['content'],
      orderBy: { content: 'asc' },
      select: { content: true },
      skip: 1,
      take: 5,
      where: { id: 1 }
    }

    todoService.findAll(args)

    expect(findAllTodoSpy).toHaveBeenCalledWith(args)

  })

  it("should call findOne method wuth expected params", () => {
    const findOneTodoSpy = jest.spyOn(todoService, 'findOne')

    const args: FindOneTodoArgsDto = {
      where: { id: 1 },
      select: { content: true }
    }

    todoService.findOne(args)

    expect(findOneTodoSpy).toHaveBeenCalledWith(args)

  })

  it("should call update method wuth expected params", () => {
    const updateTodoSpy = jest.spyOn(todoService, 'update')

    const args: UpdateTodoDto = {
      data: {
        title: "heloo"
      },
      where: {
        id: 1
      }
    }

    todoService.update(args)

    expect(updateTodoSpy).toHaveBeenCalledWith(args)

  })

  it("should call remove method wuth expected params", () => {
    const removeTodoSpy = jest.spyOn(todoService, 'remove')

    const args: Prisma.TodoDeleteArgs = {
      where: {
        id: 1
      }
    }

    todoService.remove(args)

    expect(removeTodoSpy).toHaveBeenCalledWith(args)

  })
})