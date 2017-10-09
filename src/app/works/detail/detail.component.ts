import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

// Models
import { Work } from '../../models/work.model';

// Services
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  // variables
  public supcription: Subscription;
  public workId: number;
  public work: Work;


  constructor(
    private _route: ActivatedRoute,
    private _workService: WorkService
  ) { }

  ngOnInit() {
    this.supcription = this._route.params.subscribe(params => {
      this.workId = +params['id']; // (+) converts string 'id' to a number
      if (this.workId) {
        this._workService.getById(this.workId)
          .subscribe(response => {
            this.work = response;
          });
      }
    });
  }

}
