import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'tm-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  planItems;

  constructor(private service: FeedService) { }

  ngOnInit() {
    this.service.getPlanItems().subscribe( data => {
      this.planItems = data.Trips[0].PlanItems;
    });
  }

}
