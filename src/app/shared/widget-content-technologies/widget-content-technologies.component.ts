import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-content-technologies',
  templateUrl: './widget-content-technologies.component.html',
  styleUrls: ['./widget-content-technologies.component.sass']
})
export class WidgetContentTechnologiesComponent implements OnInit {

  // variables
  public titleBlog: any = { title: 'Tecnologías' };

  constructor() { }

  ngOnInit() {
  }

}
