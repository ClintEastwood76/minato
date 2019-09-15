import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  errorMessage;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    this.authenticationService.login(loginData.username, loginData.password)
    .subscribe(
        data => {});
    this.loginForm.reset();
  }

}
