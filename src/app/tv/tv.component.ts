import { Component, OnInit } from '@angular/core';
import{MoviesService}from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  imgSrcs:string="https://image.tmdb.org/t/p/w500";
  trendingTv:any[];
  

  constructor(_MoviesService:MoviesService,) { 



    _MoviesService.getTrindTv().subscribe((data)=>{

      this.trendingTv=data.results;


      
    })
   
  }

  ngOnInit(): void {
  }

}
