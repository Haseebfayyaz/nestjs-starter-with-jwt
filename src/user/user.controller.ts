import { Controller, Param,Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('profile/:id')
    profile(@Param("id") id: number) {
        return this.userService.getUserById(id);
    }
}
