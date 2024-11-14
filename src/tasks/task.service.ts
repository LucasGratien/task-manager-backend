// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interface/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, createTaskDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
