import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userServise: UserService) {}
  @Post('users')
  async createUser(): Promise<any> {
    return this.userServise.createUser();
  }
}
