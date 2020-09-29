import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-navbr',
  templateUrl: './navbr.component.html',
  styleUrls: ['./navbr.component.scss']
})
export class NavbrComponent implements OnInit {

  isLogin:boolean=false;

  constructor(private _AuthService:AuthService) { 

    _AuthService.crrentuser.subscribe((data)=>{
      if(data != null)
      {
       this.isLogin=true;
      }
      else
      {
        this.isLogin=false;
      }
    })  
  }
  

  logOut()
  {
    this._AuthService.logOut();
  }

  ngOnInit(): void {
  }

}
