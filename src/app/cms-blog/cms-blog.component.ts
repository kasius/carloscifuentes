import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cms-blog',
  templateUrl: './cms-blog.component.html',
  styleUrls: ['./cms-blog.component.sass'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class CmsBlogComponent implements OnInit {

  // variables
  menus = [
    {
      name: 'Blog',
      rute: 'works'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
