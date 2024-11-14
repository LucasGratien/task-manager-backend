// src/task/task.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interface/task.interface';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, createTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.taskService.delete(id);
  }
}
