import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UsersService,
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
      role: new FormControl('USER'),
    });

    this.registerForm = this.formBuilder.group({
      email: ['', { validators: [Validators.email, Validators.required] }],
      first_name: ['', { validators: [Validators.required] }],
      last_name: ['', { validators: [Validators.required] }],
      password:['', { validators: [Validators.required] }],
      password_confirmation: ['', {validators:[
        Validators.required
      ]}],
      role: new FormControl('USER')
    });
  }

  public onSubmit() {

    if (this.userService.existUserByEmail(this.registerForm.get('email'))) {
      alert('User already exist'); //TODO: handle from template
      return;
    }

    if(this.registerForm.get('password') !== this.registerForm.get('password_confirmation')){
      alert('Password and password confirmation must be the same'); //TODO: handle from template
      return;
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

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

  //#region form getters
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
  //#endregion
}
