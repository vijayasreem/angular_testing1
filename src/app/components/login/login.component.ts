import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  submitted:Boolean=false
  constructor(private authService: LoginService,
    private fb: FormBuilder,) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  }
  get form() {
    return this.loginForm.controls;
  }
  onSubmit() {
  
    this.authService.login(this.loginForm.value).subscribe((resp)=>{
      console.log("login success")
    });
  }
}
