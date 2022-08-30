import { PartialType } from '@nestjs/swagger';
import { CreateLoginFormDto } from './create-login_form.dto';

export class UpdateLoginFormDto extends PartialType(CreateLoginFormDto) {
    loginFormId:string;
    loginFormModBy:string;
    loginFormModOn:Date;
}
