import { Component } from '@angular/core';
import { MovieDetails } from '../../model/movieDetails';
import { MovieServiceService } from '../../Service/movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
    movieData: MovieDetails | undefined;
    load : boolean = true;

    constructor(private route:ActivatedRoute, 
      private router:Router, 
      private Service:MovieServiceService,
      private ChangeDetectorRef:ChangeDetectorRef
    ){}
    
    ngOnInit(): void {
      this.load = true;
      const id = this.route.snapshot.paramMap.get('id') || '';

      this.Service.getMovieDetails(id).subscribe(data=>{
        if (Object.keys(data ?? {}).length>0){
          this.movieData = data;
          this.ChangeDetectorRef.detectChanges();
          this.load = false;
        }
      })
    }

    returnToHome(): void{
      this.router.navigate(['movies'])
    }
}
