import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FriendsComponent } from './friends/friends.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    FriendsComponent
  ],
  exports: [
    MainComponent,
    SidenavComponent,
    FriendsComponent
  ]
})
export class MainModule { }
