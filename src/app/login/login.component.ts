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
    .subscribe(data => {},
      error => {
        if (error.status === 401) {
            this.wrongCredentials = true;
            this.openSnackBar();
        }
        this.errorMessage = error;

      });
    this.loginForm.reset();
  }

  openSnackBar() {
    /*this._snackBar.openFromComponent(ErrorCredentialsComponent, {
      duration: this.durationInSeconds * 1000,
    });
    */
    let sbRef = this._snackBar.open('Credenziali errate', 'Recupera!', {
      duration: 3000
    });
    sbRef.onAction().subscribe(() => {
      alert('vai alla pagina del recupero credenziali');
    })
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
