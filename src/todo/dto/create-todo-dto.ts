import { IsEnum, IsOptional } from '@nestjs/class-validator';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty({ message: 'Title cant be empty ' })
  @MinLength(3, { message: 'title have to be at least 3 char long ' })
  @MaxLength(100, { message: 'title can not be exceed 100 char ' })
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @IsBoolean()
  @IsOptional() // Make completed optional with default
  completed?: boolean;

  @IsEnum(Priority, { message: 'Priority must be: LOW, MEDIUM, or HIGH' })
  @IsOptional()
  priority?: Priority;
}
