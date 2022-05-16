import { Controller, Get, Param } from '@nestjs/common';
import users, { IUser } from 'src/users';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  async index(): Promise<IUser[]> {
    return users;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<IUser> {
    return users.find((product: any) => product.id === parseInt(id));
  }
}
