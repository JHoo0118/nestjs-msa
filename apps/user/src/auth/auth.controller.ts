import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(token: string, @Body() reigsterDto: RegisterDto) {
    if (token === null) {
      throw new UnauthorizedException('토큰을 입력해 주세요!');
    }
    console.log(reigsterDto);

    // return this.authService.register('token', reigsterDto);
  }
}
