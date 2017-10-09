import { Component, OnInit, Input } from '@angular/core';

// Models
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-widget-content-article',
  templateUrl: './widget-content-article.component.html',
  styleUrls: ['./widget-content-article.component.sass']
})
export class WidgetContentArticleComponent implements OnInit {

  // variables
  public titleBlog: any = { title: 'Articulos'};
  @Input('articles') articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
