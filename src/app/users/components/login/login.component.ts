import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  /*   private initFormGroup() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  } */

  public onSubmit() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        if (result) {
          this.router.navigate(['/houses']);
        } else {
          console.log('Error en el login');
        }
      });
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
