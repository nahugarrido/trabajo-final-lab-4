import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UsersService) {}

  public async login(email: string, password: string): Promise<boolean> {
    let users: User[] = [];

      let apiResponse = this.userService.getUserByEmailAndPassword(
        email,
        password
      ).subscribe({
        next: (data)=>{ 
          if(!data || !Array.isArray(data) || data.length == 0) return;
          
          users = data;
          this.setActiveUser(users[0].id);
        },
        error: (error)=>{
          console.log(error)
        }
      })
    return users.length == 1;
  }

  public async register(user: User): Promise<boolean> {
    try {
      let apiResponse = this.userService.createuser(user);
      user = await lastValueFrom(apiResponse);
      this.setActiveUser(user.id);
    } catch (error) {
      console.log(error);
    }

    return user.id != 0;
  }

  private setActiveUser(id: number) {
    sessionStorage.setItem('active-user', id.toString());
  }

  public getActiveUser(): number {
    return Number(sessionStorage.getItem('active-user'));
  }

  public cleanUserData(): void {
    sessionStorage.removeItem('active-user');
  }
}
