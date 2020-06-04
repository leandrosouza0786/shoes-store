import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  @Output() stateLogin = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private loginService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    let username = this.loginForm.get('username').value
    let password = this.loginForm.get('password').value
    console.log(password)
    this.loginService.login(username, password)
      .subscribe(
        (e) => { this.stateLogin.emit(e) },
        (err) => console.log(err)
      )
  }

}
