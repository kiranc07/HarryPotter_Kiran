import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./harryPotter/movie.module').then(m => m.MovieModule)
      }
];
