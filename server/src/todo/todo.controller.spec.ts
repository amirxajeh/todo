import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Todo } from '@prisma/client';
import * as request from 'supertest'

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

const CREATE_RESULT: Todo = {
  id: 1,
  title: 'created todo',
  content: 'create todo content',
  published: false,
  createdAt: new Date(),
  updatedAt: new Date()
}

const FIND_ONE_RESULT: Todo = {
  id: 2,
  title: 'founded todo',
  content: 'founded todo content',
  published: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const FIND_ALL_RESULT: Todo[] = [
  {
    id: 1,
    title: 'founded all todo',
    content: 'founded all todo content',
    published: false,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    id: 2,
    title: 'founded all todo 2',
    content: 'founded all todo content 2',
    published: false,
    createdAt: new Date(),
    updatedAt: new Date()

  }
]

const DELETE_RESULT = {
  id: 1
}

const UPDATE_RESULT: Todo = {
  id: 3,
  title: 'UPDATED TODO',
  content: 'Updated todo content',
  published: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const service = {
  create: () => CREATE_RESULT,
  findOne: () => FIND_ONE_RESULT,
  findAll: () => FIND_ALL_RESULT,
  delete: () => DELETE_RESULT,
  update: () => UPDATE_RESULT
}

describe('Todo', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TodoService,
          useValue: service,
        },
      ],
      controllers: [TodoController],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });


  describe("POST /todo", () => {

    it("create todo successfully", async () => {
      await request(app.getHttpServer())
        .post('/todo')
        .send(CREATE_RESULT)
        .expect(HttpStatus.CREATED)
        .expect({
          ...CREATE_RESULT,
          createdAt: CREATE_RESULT.createdAt.toISOString(),
          updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        })
    })

    it("validation error", async () => {
      await request(app.getHttpServer())
        .post('/todo')
        .set('Accept', 'application/json')
        .expect(HttpStatus.BAD_REQUEST)
    })

  })

  afterAll(async () => {
    await app.close();
  });
});
