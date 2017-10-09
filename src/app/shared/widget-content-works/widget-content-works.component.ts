import { Component, OnInit } from '@angular/core';

// Models
import { Work } from '../../models/work.model';

// Mocks
import { WorkMocks } from '../../mocks/work.mock';

@Component({
  selector: 'app-widget-content-works',
  templateUrl: './widget-content-works.component.html',
  styleUrls: ['./widget-content-works.component.sass']
})
export class WidgetContentWorksComponent implements OnInit {

  // variables
  public view: any = {
    title: 'Trabajos',
    subtitle: 'e participado en:',
    works: []
  };

  constructor() { }

  ngOnInit() {
    this.view.works = WorkMocks;
  }

}
