import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '../services/http-client.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Models
import { Article } from '../models/article.model';

// Mocks
import { ArticleMocks } from '../mocks/article.mock';

@Injectable()
export class ArticleService extends HttpClient {

  getAll(): Observable<Article[]> {
    // const url = `${environment.BASE_URL_API}/accounts/common-expenses`;
    // return this.get(url);
    return Observable.create(observer => {
      observer.next(ArticleMocks);
      observer.complete();
    });
  }

  getById(articleId: number): Observable<Article> {
    // const url = `${environment.BASE_URL_API}/accounts/common-expenses`;
    // return this.get(url);
    return Observable.create(observer => {
      observer.next(ArticleMocks.find(a => a.id === articleId));
      observer.complete();
    });
  }

}

