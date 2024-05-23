import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movieDetails/movie-details/movie-details.component';
import { MovieListComponent } from './movieList/movie-list/movie-list.component';
import { MovieServiceService } from './Service/movie-service.service';
import { BudgetPipePipe } from './pipe/budget-pipe.pipe';
import { DurationPipePipe } from './pipe/duration-pipe.pipe';
import { MovieRoutingModule } from './movieRouting.module';

@NgModule({
    declarations: [MovieDetailsComponent, MovieListComponent, DurationPipePipe, BudgetPipePipe],
    providers: [MovieServiceService],
    imports: [MovieRoutingModule, FormsModule, HttpClientModule, CommonModule]
})

export class MovieModule {}