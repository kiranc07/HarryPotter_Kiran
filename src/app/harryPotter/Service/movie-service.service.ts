import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieDetails } from '../model/movieDetails';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = '/movies';

  getMoviesList():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.apiUrl + "/" + id);
  }

  }
