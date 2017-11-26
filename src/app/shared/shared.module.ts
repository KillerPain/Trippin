import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeedComponent } from './feed/feed.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedService } from './feed/feed.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
  ],
  providers: [FeedService]
})
export class SharedModule { }
