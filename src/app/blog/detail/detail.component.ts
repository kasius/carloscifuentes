import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  // variables
  public articleId: number;
  public supcription: Subscription;

  constructor(
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.supcription = this._router.params.subscribe(params => {
      this.articleId = +params['id'];
    });
  }

}
