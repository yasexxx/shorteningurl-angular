import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinkResolver } from './resolvers/link.resolver';
import { RedirectResolver } from './resolvers/redirect.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'app/shorten',
    loadChildren: () => import('./pages/shorten/shorten.module').then(m => m.ShortenModule),
    resolve: {
      link: LinkResolver,
    },
  },
  { path: ':id',
    loadChildren: () => import('./pages/redirect/redirect.module').then(m => m.RedirectModule),
    resolve: {
      redirect: RedirectResolver
    }
  },
  { path: 'error/404', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
