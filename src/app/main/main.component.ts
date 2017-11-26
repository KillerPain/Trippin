import { Component, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'tm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('page', {read: ViewContainerRef })
  private pageContainer: ViewContainerRef ;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(ModalComponent);
    // const componentRef = this.pageContainer.createComponent(factory);
  }

}
