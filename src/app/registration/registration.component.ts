import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{FormGroup , FormControl , Validators}from '@angular/forms';
import {AuthService}from '../auth.service';
import {Router}from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registerForm:FormGroup=new FormGroup({

    'first_name':new FormControl(null,[Validators.required , Validators.minLength(3) ,Validators.maxLength(8)]),
    'last_name':new FormControl(null,[Validators.required , Validators.minLength(3) ,Validators.maxLength(8)]),
    'email':new FormControl(null , [Validators.email, Validators.required]),
    'password':new FormControl(null ,[Validators.required,])


  })

flag:boolean=false;


  getRegister(registerForm)
  {
    if(registerForm.valid==true)
      this._AuthService.register(registerForm.value).subscribe((data)=>{

        if(data.message=='success')
        {
          this._Router.navigate(['/login'])
        }
        else
        {
          this.flag=true;
        }
      })
  }

  constructor( private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }

}
