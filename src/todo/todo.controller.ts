import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoServices: TodoService) {}

  @Get('/all-todos')
  async allTodos() {
    const result = await this.todoServices.getAllTodos();

    return {
      status: HttpStatus.OK,
      message: 'All todos retrived successfuly !!',
      data: result,
    };
  }

  @Get('/single-todo/:id')
  async getSingleTodo(@Param('id') id: number) {
    const todoId = +id;

    const result = await this.todoServices.getSingleTodo(todoId);

    return {
      status: HttpStatus.OK,
      message: 'todo retrived successfuly !!',
      data: result,
    };
  }

  @Post('/create-todo')
  async createNewTodo(@Body() createTodoDto: CreateTodoDto) {
    const result = await this.todoServices.craeteTodo(createTodoDto);

    return {
      status: HttpStatus.CREATED,
      message: 'todo CREATED successfuly !!',
      data: result,
    };
  }

  //
}
