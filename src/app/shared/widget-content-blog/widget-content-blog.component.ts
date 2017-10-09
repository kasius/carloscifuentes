import { Component, OnInit, Input } from '@angular/core';

// Models
import { Article } from '../../models/article.model';

// Services
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-widget-content-blog',
  templateUrl: './widget-content-blog.component.html',
  styleUrls: ['./widget-content-blog.component.sass']
})
export class WidgetContentBlogComponent implements OnInit {

  // variables
  public titleBlog: any = { title: 'Mi Primer Post en mi Blog Personal!!!', publish: 'Publicado: 22-02-1989' };
  public article: Article;
  @Input('articleId') articleId: number;

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticleById(this.articleId);
  }

  public getArticleById(articleId: number): void {
    this._articleService.getById(articleId)
      .subscribe(
      article => {
        this.article = article;
      },
      err => console.log(err));
  }

}
