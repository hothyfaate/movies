import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl , Validators}from '@angular/forms';
import {AuthService}from '../auth.service';
import {Router}from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


loginForm:FormGroup=new FormGroup({
  'email':new FormControl(null , [Validators.email, Validators.required]),
    'password':new FormControl(null ,[Validators.required,])

})

erroMessage:string;
flag:boolean=false;

getLoginForm(LoginFormValue)
{
  this._AuthService.Login(LoginFormValue.value).subscribe((data)=>{

    if(data.message=='success')
    {
      this._AuthService.saveCrruntUser(data.user.first_name,data.user.last_name,data.user.email,data.token)
      this._Router.navigate(['/home'])
    }
    else
    {
      this.flag=true;
      this.erroMessage=data.message;

    }

  })
}

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }

}
