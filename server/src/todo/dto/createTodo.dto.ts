import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class CreateTodoDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  content: string

  @IsOptional()
  @IsBoolean()
  published?: boolean

  @IsOptional()
  createdAt?: Date

  @IsOptional()
  updatedAt?: Date
}