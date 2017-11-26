import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { FeedComponent } from '../shared/feed/feed.component';
import { ProfileComponent } from '../shared/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'trip/:id',
        component: ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
