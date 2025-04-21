import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
         private readonly userRepo: UserRepository,
      ) {}

      getUserById(id: number){
        return  this.userRepo.findById(id);
      }
}
