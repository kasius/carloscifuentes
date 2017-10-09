import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-contact',
  templateUrl: './widget-contact.component.html',
  styleUrls: ['./widget-contact.component.sass']
})
export class WidgetContactComponent implements OnInit {

  // variables
  public titleBlog: any = { title: 'Contacto'};

  constructor() { }

  ngOnInit() {
  }

}
