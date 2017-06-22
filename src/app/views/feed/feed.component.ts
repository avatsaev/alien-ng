import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MockService} from "../../services/mock.service";
import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {Thread} from "../../models/thread";


import * as ThreadActions from '../../store/thread.actions';

import {ApplicationState} from "../../store/application.state";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  threadCount$: Observable<number>;
  threads$: Observable<Thread[]>;

  constructor(
      private mockS: MockService,
      public store: Store<ApplicationState>
  ) { }

  ngOnInit() {


    this.threads$ = this.store.select(state => state.threads.allThreads);

    this.mockS.getThreads().subscribe(res => {

      this.store.dispatch(new ThreadActions.LoadAll(res['threads']))
    });


  }

}
