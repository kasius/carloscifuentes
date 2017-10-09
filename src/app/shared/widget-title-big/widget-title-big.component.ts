import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-title-big',
  templateUrl: './widget-title-big.component.html',
  styleUrls: ['./widget-title-big.component.sass']
})
export class WidgetTitleBigComponent implements OnInit {

  // variables
  @Input('title') title: string;
  @Input('publish') publish: string;

  constructor() { }

  ngOnInit() {
  }

}
