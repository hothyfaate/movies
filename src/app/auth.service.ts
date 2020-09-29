import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import {Router}from '@angular/router';
import {userDate} from './userData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  crrentuser=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient, private _Router:Router) { 

    if(localStorage.getItem('userdata')!=null)
    {
      this.crrentuser.next(JSON.parse(localStorage.getItem('userdata')));
    }
  }


  register(registerFormValue):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',registerFormValue)
  }

  Login(LoginFormValue):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',LoginFormValue)
  }

  logOut()
  {
    this.crrentuser.next(null);
    localStorage.setItem('userdata',null);
    this._Router.navigate(['/login']);
  }

  
  saveCrruntUser( first_name, last_name, email, token)
  {
    let user =new userDate(first_name, last_name, email, token);
    localStorage.setItem('userdata',JSON.stringify(user));
    this.crrentuser.next(user);
  }

}

