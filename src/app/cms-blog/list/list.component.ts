import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public messages = [
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' },
    { from: 'a sdasds', subject: '234234s', content: 'asdasdas' }
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
