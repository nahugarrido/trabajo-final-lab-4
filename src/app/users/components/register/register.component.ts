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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  confirmPasswordFail: boolean = false;
  emailAlreadyExist: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
      role: new FormControl('USER'),
    });

    this.registerForm = this.formBuilder.group({
      email: ['', { validators: [Validators.email, Validators.required] }],
      first_name: ['', { validators: [Validators.required] }],
      last_name: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }],
      password_confirmation: ['', { validators: [Validators.required] }],
      role: new FormControl('USER'),
    });
  }

  public onSubmit() {
    this.emailAlreadyExist = false;
    this.confirmPasswordFail = false;
    console.log('this.registerForm', this.registerForm.value);
    this.authService
      .validateEmail(this.registerForm.value.email)
      .then((data) => {
        if (data) {
          this.emailAlreadyExist = true;
          return;
        } else {
          this.emailAlreadyExist = false;
          if (
            this.registerForm.value.password !==
            this.registerForm.value.password_confirmation
          ) {
            console.log('this.registerForm', this.registerForm.value);
            this.confirmPasswordFail = true;
            return;
          } else {
            this.confirmPasswordFail = false;
          }

          this.authService.register(this.registerForm.value).then((data) => {
            console.log('data', data);
            if (data) {
              this.router.navigate(['/houses']);
            } else {
              console.log('Error en el registro');
            }
          });
        }
      });
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

  get email() {
    return this.registerForm.get('email');
  }
  get first_name() {
    return this.registerForm.get('first_name');
  }
  get last_name() {
    return this.registerForm.get('last_name');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get password_confirmation() {
    return this.registerForm.get('password_confirmation');
  }
}
