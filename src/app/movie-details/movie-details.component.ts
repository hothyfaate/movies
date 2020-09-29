import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import{MoviesService}from '../movies.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  imgSrcs:string="https://image.tmdb.org/t/p/w500";
  type:any;
  id:any;
  movieDetails:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {


    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    this._MoviesService.getItemDetails(this.type,this.id).subscribe((data)=>{

     this.movieDetails=data;
    })

   }

  ngOnInit(): void {
  }

}
