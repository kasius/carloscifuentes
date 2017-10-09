import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  public ckeditorContent: string;
  public itemObjectsLeft: any[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' }
  ];

  public itemObjectsRight: any[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' }
  ];
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];


  constructor() {
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  ngOnInit() {
  }

}
