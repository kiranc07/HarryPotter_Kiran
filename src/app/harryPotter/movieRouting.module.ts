import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MovieDetailsComponent } from './movieDetails/movie-details/movie-details.component';
import { MovieListComponent } from './movieList/movie-list/movie-list.component';

const route: Routes = [
    { path:'', component: MovieListComponent},
    { path:'movies',redirectTo:''},
    { path:'movies/:id', component:MovieDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })

  export class MovieRoutingModule { }
