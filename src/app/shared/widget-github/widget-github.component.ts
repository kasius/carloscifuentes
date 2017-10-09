import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.sass']
})
export class WidgetGithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // direccionamos a repositorio que contiene código de proyecto
  public repositoryCarlosCifuentes(): void {
    window.open('https://github.com/kasius/carloscifuentes', '_blank');
  }

}
