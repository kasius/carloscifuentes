import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-comment',
  templateUrl: './widget-comment.component.html',
  styleUrls: ['./widget-comment.component.sass']
})
export class WidgetCommentComponent implements OnInit {

  // variables
  @Input('comment') comment: string;

  constructor() { }

  ngOnInit() {
  }

}
