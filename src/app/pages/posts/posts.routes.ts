import { Routes } from '@angular/router';
import { authGuard } from 'src/app/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/posts.component')
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./post/post.component')
  },
  {
    path: 'create',
    canActivate: [authGuard],
    loadComponent: () => import('./create/create.component')
  }
];
export default routes;
