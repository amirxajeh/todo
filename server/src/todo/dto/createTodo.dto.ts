import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class CreateTodoDto {
  @IsNumber()
  id: number

  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  content: string

  @IsBoolean()
  published: boolean

  @IsOptional()
  createdAt?: Date

  @IsOptional()
  updatedAt?: Date
}