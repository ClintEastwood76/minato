import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  errorMessage;
  wrongCredentials = false;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.wrongCredentials = false;
  }

  onSubmit(loginData) {
    this.authenticationService.login(loginData.username, loginData.password)
    .pipe(first())
    .subscribe(
        data => {
          this.wrongCredentials = false;
          console.log('data ' + data);
        },
        error => {
          if (error.status === 401) {
              this.wrongCredentials = true;
          }
          // console.log('error ' + JSON.stringify(error));
          this.errorMessage = error;
        });
    this.loginForm.reset();
  }

}
