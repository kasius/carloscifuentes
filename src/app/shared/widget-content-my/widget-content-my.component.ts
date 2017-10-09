import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-content-my',
  templateUrl: './widget-content-my.component.html',
  styleUrls: ['./widget-content-my.component.sass']
})
export class WidgetContentMyComponent implements OnInit {

  // variables
  public my: any = {
    title: 'Desarrollador Full-Stack',
    publish: 'Especializado en desarrollos Front-End - AngularJS',
    second: 'Ingeniero en Ejecución en Computación e Informática',
    comment: '«Si lo puedes imaginar, lo puedes "DESARROLLAR"»',
    commentMy: 'Carlos Cifuentes es un ingeniero desarrollador con conocimientos Front-End, Back-End y móvil, a participado de varios proyectos grandes de manera activa, especialista AngularJS en sus versiones más actuales, conocimientos de negocio en Celulosa, Telemedicina, RRHH y gestión de información a gran escala.',
    description: 'Especialista AngularJS, experiencia en desarrollos con Angular 1.5, 1.6, durante 2016 e integrado y adquirido conocimientos bases para el desarrollo con Angular 2, actualmente me desempeño a diario como encargado Front-End desarrollando en Angular 4, poseo varias plataformas en las cuales e sido parte y e estado aportando en el desarrollo con esta tecnología en un nivel senior, solucionando y orientando en la mejor opción para sacar plataformas optimizadas en performance, seguridad y robustas, en lo que a Front-End respecta.',
    angular: 'Especialista AngularJS, en el desarrollo de plataformas empresariales!!!'
  };

  constructor() { }

  ngOnInit() {
  }

}
