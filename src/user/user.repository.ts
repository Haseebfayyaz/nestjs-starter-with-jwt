import { DataSource, EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository {
    private userRepo: Repository<UserEntity>;

  constructor(private dataSource: DataSource) {
    this.userRepo = this.dataSource.getRepository(UserEntity);
  }
    async createUser(email: string, password: string): Promise<UserEntity> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.userRepo.create({ email, password: hashedPassword });
        return this.userRepo.save(user);
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
      return this.userRepo.findOne({ where: { email } });
    }

    async findById(id: number): Promise<UserEntity | null> {
      return this.userRepo.findOne({ where: { id } });
    }

    // getUser(): Promise<UserEntity | null> {
    //     return this.userRepo.findOne({});
    // }
}
