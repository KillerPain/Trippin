import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { MainModule } from './main/main.module';
import { FeedComponent } from './shared/feed/feed.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
