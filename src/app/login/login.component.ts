import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  errorMessage;
  wrongCredentials = false;
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar
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
              this.openSnackBar();
          }
          // console.log('error ' + JSON.stringify(error));
          this.errorMessage = error;

        });
    this.loginForm.reset();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ErrorCredentialsComponent, {
      duration: this.durationInSeconds * 1000,
    });

  }
}

@Component({
  selector: 'error-snackbar',
  templateUrl: 'error-snackbar.html',
  styles: [`
    .example-pizza-party {
      color: orange;
    }
  `],
})
export class ErrorCredentialsComponent {}
