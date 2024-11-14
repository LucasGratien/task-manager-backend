import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Créer un utilisateur
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Trouver tous les utilisateurs
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Trouver un utilisateur par son ID
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
