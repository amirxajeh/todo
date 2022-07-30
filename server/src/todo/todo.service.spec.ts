import { Test, TestingModule } from "@nestjs/testing"
import { Prisma } from "@prisma/client"
import { SortOrder } from "./../util/SortOrder"
import { CreateTodoDto } from "./dto/createTodo.dto"
import { TodoFindManyArgs } from "./dto/TodoFindManyArgs"
import { TodoFindUniqueArgs } from "./dto/TodoFindUniqueArgs"
import { TodoUpdateInput } from "./dto/TodoUpdateInput"
import { TodoWhereUniqueInput } from "./dto/TodoWhereUniqueInput"
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

    const args: TodoFindManyArgs = {
      orderBy: [{ content: SortOrder.Asc }],
      skip: 1,
      take: 5,
      where: {
        id: {
          equals: 1
        }
      }
    }

    todoService.findAll(args)

    expect(findAllTodoSpy).toHaveBeenCalledWith(args)

  })

  it("should call findOne method wuth expected params", () => {
    const findOneTodoSpy = jest.spyOn(todoService, 'findOne')

    // args that pass into the controller
    const args: TodoWhereUniqueInput = {
      id: 1
    }

    // all args that pass to service
    const mainArgs: Prisma.TodoFindUniqueArgs = {
      where: args,
      select: {
        content: true
      }
    }

    todoService.findOne(mainArgs)

    expect(findOneTodoSpy).toHaveBeenCalledWith(mainArgs)

  })

  it("should call update method wuth expected params", () => {
    const updateTodoSpy = jest.spyOn(todoService, 'update')

    const data: TodoUpdateInput = {
      content: 'new content',
      published: false
    }
    const id = 1

    const mainArgs: Prisma.TodoUpdateArgs = {
      data,
      where: {
        id
      }
    }

    todoService.update(mainArgs)

    expect(updateTodoSpy).toHaveBeenCalledWith(mainArgs)

  })

  it("should call remove method wuth expected params", () => {
    const removeTodoSpy = jest.spyOn(todoService, 'remove')

    const args: Prisma.TodoDeleteArgs = {
      where: {
        id: 1
      },
      select: {
        content: true
      }
    }

    todoService.remove(args)

    expect(removeTodoSpy).toHaveBeenCalledWith(args)

  })
})