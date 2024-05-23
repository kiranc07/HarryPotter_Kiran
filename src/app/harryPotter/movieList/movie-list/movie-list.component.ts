import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieServiceService } from '../../Service/movie-service.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movie: Movie[] = [];
  filter: Movie[] = [];
  title: string = '';
  year: string = '';


  constructor (private Service: MovieServiceService){}

  ngOnInit(): void {
    this.Service.getMoviesList().subscribe(data=>{
      this.movie=data;
      this.search();
    })
  }

  search(): void{
    this.filter = this.movie.filter((movie: Movie)=>
      movie?.title.toLowerCase().includes(this.title.toLowerCase()) &&
      this.releaseYear(movie?.release_date)
    );
  }

  releaseYear(date?:string): boolean{
    if(!this.year || !date){
      return true;
  }

      const releaseDateYear = new Date(date).getFullYear().toString();
      return releaseDateYear.includes(this.year);
  }
}
