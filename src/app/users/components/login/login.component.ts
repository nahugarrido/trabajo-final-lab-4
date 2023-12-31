import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        this.errorLogin = false;
        if (result) {
          this.router.navigate(['/houses']);
        } else {
          this.errorLogin = true;
          console.log('Error en el login');
        }
      });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
