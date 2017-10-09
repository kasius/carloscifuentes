import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '../services/http-client.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Models
import { Work } from '../models/work.model';

// Mocks
import { WorkMocks } from '../mocks/work.mock';

@Injectable()
export class WorkService extends HttpClient {

  getAll(): Observable<Work[]> {
    // const url = `${environment.BASE_URL_API}/accounts/common-expenses`;
    // return this.get(url);
    return Observable.create(observer => {
      observer.next(WorkMocks);
      observer.complete();
    });
  }

  getById(workId: number): Observable<Work> {
    // const url = `${environment.BASE_URL_API}/accounts/common-expenses`;
    // return this.get(url);
    return Observable.create(observer => {
      observer.next(WorkMocks.find(a => a.id === workId));
      observer.complete();
    });
  }

}

