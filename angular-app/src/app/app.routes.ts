import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/posts/posts.component')
          .then(c => c.PostsComponent)
      },

      {
        path: ':slugSeries',
        loadComponent: () => import('./components/series/series.component')
          .then(c => c.SeriesComponent)
      }
    ]
  },
  {
    path: ':slug',
    component: PostDetailsComponent
  }
];
