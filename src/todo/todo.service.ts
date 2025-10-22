import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo-dto';
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
  constructor(private prisma: PrismaService) {}

  // ! for getting all todos
  async getAllTodos() {
    try {
      const result = await this.prisma.todoModel.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return result;
    } catch (error) {
      throw new Error('Failed to fetch todos from database');
    }
  }

  //   !for getting single todo
  async getSingleTodo(todoId: number) {
    try {
      const result = await this.prisma.todoModel.findUnique({
        where: { id: todoId },
      });

      if (!result) {
        throw new NotFoundException(`Todo with ID ${todoId} not found`);
      }

      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new Error('Failed to fetch todo from database');
    }
  }

  // ! for creating new todo
  async craeteTodo(payload: CreateTodoDto) {
    try {
      const result = await this.prisma.todoModel.create({
        data: {
          ...payload,
        },
      });

      return result;
    } catch (error) {
      throw new Error('Failed to create todo in database');
    }
  }

  //
}
