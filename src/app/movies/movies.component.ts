import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{MoviesService}from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imgSrc:string="https://image.tmdb.org/t/p/w500";
  trandingMovies:any[];

  constructor(_MoviesService:MoviesService) { 


    _MoviesService.getTrindMovies().subscribe((data)=>{

      this.trandingMovies=data.results;

    })
  }

  ngOnInit(): void {
  }

}
