import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-kasius',
  templateUrl: './sidebar-kasius.component.html',
  styleUrls: ['./sidebar-kasius.component.sass']
})
export class SidebarKasiusComponent implements OnInit {

  // variables
  public menu: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // toggle menú
  public toggleMenu(): void {
    this.menu = !this.menu;
  }

}
