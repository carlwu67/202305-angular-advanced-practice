import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./pages/posts/posts.routes')
  },

];
