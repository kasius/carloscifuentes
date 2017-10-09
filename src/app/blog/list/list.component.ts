import { Component, OnInit } from '@angular/core';

// Models
import { Article } from '../../models/article.model';

// Services
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  // variables
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles(): void {
    this._articleService.getAll()
      .subscribe(
      articles => {
        this.articles = articles;
      },
      err => console.log(err));
  }

}
