import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/user.model';
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

  /// copilot rehaceme la funcion de abajo como te mostre en el comentario de arriba
  private initFormGroup() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('USER'),
    });
  }

  public onSubmit() {
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
}
