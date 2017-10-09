import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-article',
  templateUrl: './widget-article.component.html',
  styleUrls: ['./widget-article.component.sass']
})
export class WidgetArticleComponent implements OnInit {

  // variables
  @Input('article') article: any;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public detailArticle(articleId: number): void {
    this._router.navigate(['/blog/detail', articleId]);
  }

}
