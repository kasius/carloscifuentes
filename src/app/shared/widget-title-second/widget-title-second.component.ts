import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-title-second',
  templateUrl: './widget-title-second.component.html',
  styleUrls: ['./widget-title-second.component.sass']
})
export class WidgetTitleSecondComponent implements OnInit {

  // variables
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
