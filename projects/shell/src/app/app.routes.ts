import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flight-list',
    loadChildren: () => import('mfe2/ModuleMfe2')
    .then(m => m.FlightsModule)
  },

    {
    path: 'flights',
    loadChildren: () => import('mfe1/Module')
      .then(m => m.FlightsModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('mfe1/Module')
      .then(m => m.ShoppingModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

