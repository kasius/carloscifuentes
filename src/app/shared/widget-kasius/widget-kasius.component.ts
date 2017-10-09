import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-kasius',
  templateUrl: './widget-kasius.component.html',
  styleUrls: ['./widget-kasius.component.sass']
})
export class WidgetKasiusComponent implements OnInit {

  // variables
  public kasius = {
    name: 'Carlos Cifuentes',
    profession: 'Ingeniero Informático',
    specialty: 'Desarrollador AngularJS',
    profile: 'Perfil Full-Stack',
    email: 'kcifuentes89@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
