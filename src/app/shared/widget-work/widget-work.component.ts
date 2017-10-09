import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-work',
  templateUrl: './widget-work.component.html',
  styleUrls: ['./widget-work.component.sass']
})
export class WidgetWorkComponent implements OnInit {

  // variables
  @Input('work') work: any;

  constructor() { }

  ngOnInit() {
  }

}
