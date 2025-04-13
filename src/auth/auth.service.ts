import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { LoginUserDto, RegisterUserDto } from '../user/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
     private readonly userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterUserDto) {
    return this.userRepo.createUser(dto.email, dto.password);
  }

  async login(dto: LoginUserDto): Promise<{ access_token: string }> {
    const user = await this.userRepo.findByEmail(dto.email);
    if (user && (await bcrypt.compare(dto.password, user.password))) {
      const payload = { email: user.email, sub: user.id };
      return { access_token: this.jwtService.sign(payload) };
    }
    throw new Error('Invalid credentials');
  }
}
