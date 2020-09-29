import { Component, OnInit } from '@angular/core';
import{MoviesService}from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  imgSrcs:string="https://image.tmdb.org/t/p/w500";
  tredingMovieAll:any[];
  trendingTvAll:any[];

  constructor(_MoviesService:MoviesService) { 

    _MoviesService.getTrindMovies().subscribe((date)=>{

      this.tredingMovieAll=date.results.slice(0,10);

    })

    _MoviesService.getTrindTv().subscribe((data)=>{

      this.trendingTvAll=data.results.slice(0,10);
    })


  }

  

  ngOnInit(): void {
  }

}
