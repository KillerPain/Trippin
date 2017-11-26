import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeedComponent,
    ModalComponent,
    ProfileComponent
  ],
  entryComponents: [ModalComponent],
  exports: [
    FeedComponent,
    ModalComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
