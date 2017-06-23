import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'feed',
    children: [
      {path: '',  loadChildren: 'app/views/feed/feed.module#FeedModule' },
      {path: 'thread/:id', loadChildren: 'app/views/thread/thread.module#ThreadModule'}
    ]

  },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
