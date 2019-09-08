import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sessionService;
  loginForm;
  errorMessage;

  constructor(private formBuilder: FormBuilder,
    sessionService: SessionService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.sessionService = sessionService;
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    // Process checkout data here
    console.warn('Logging in...', loginData);
    this.sessionService.login(loginData.username, loginData.password);
    this.loginForm.reset();
  }

}
