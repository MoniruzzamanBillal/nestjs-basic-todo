import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoServices: TodoService) {}

  @Get('/all-todos')
  allTodos() {
    return {
      status: HttpStatus.OK,
      message: 'All todos retrived successfuly !!',
      data: this.todoServices.getAllTodos(),
    };
  }

  @Get('/single-todo/:id')
  getSingleTodo(@Param('id') id: number) {
    const todoId = +id;

    return {
      status: HttpStatus.OK,
      message: 'todo retrived successfuly !!',
      data: this.todoServices.getSingleTodo(todoId),
    };
  }

  //
}
