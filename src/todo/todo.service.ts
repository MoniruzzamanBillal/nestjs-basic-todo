import { Injectable } from '@nestjs/common';
import { TTodo } from './todo.interface';

const FakeTodos: TTodo[] = [
  {
    id: 1,
    title: 'Learn NestJS fundamentals',
    description: 'Study modules, controllers, and providers',
    completed: true,
    priority: 'high',
  },
  {
    id: 2,
    title: 'Create MongoDB connection',
    description: 'Set up mongoose with NestJS',
    completed: true,
    priority: 'high',
  },
  {
    id: 3,
    title: 'Implement CRUD operations',
    description: 'Create todo service with all operations',
    completed: false,
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Add input validation',
    description: 'Use class-validator for DTO validation',
    completed: false,
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Write API documentation',
    description: 'Document all endpoints with examples',
    completed: false,
    priority: 'low',
  },
  {
    id: 6,
    title: 'Test all API endpoints',
    description: 'Use Postman to test CRUD operations',
    completed: false,
    priority: 'high',
  },
  {
    id: 7,
    title: 'Add error handling',
    description: 'Implement proper exception filters',
    completed: true,
    priority: 'medium',
  },
  {
    id: 8,
    title: 'Set up environment configuration',
    description: 'Configure different environments (dev, prod)',
    completed: false,
    priority: 'low',
  },
  {
    id: 9,
    title: 'Deploy to production',
    description: 'Deploy the todo app to a cloud platform',
    completed: false,
    priority: 'high',
  },
  {
    id: 10,
    title: 'Learn about NestJS middleware',
    description: 'Understand how middleware works in NestJS',
    completed: true,
    priority: 'medium',
  },
];

@Injectable()
export class TodoService {
  // ! for getting all todos
  getAllTodos() {
    return FakeTodos;
  }

  //   !for getting single todo
  getSingleTodo(todoId: number) {
    const result = FakeTodos.filter((todo) => todo?.id === todoId);

    return result;
  }

  //
}
