import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Thread} from '../../models/thread';


import * as ThreadActions from '../../store/thread.actions';

import {ApplicationState, selectAllThreads, selectAllThreadsCount} from '../../store/application.state';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  threads$: Observable<Thread[]>;
  threadsCount$: Observable<number>;

  constructor(
      public store: Store<ApplicationState>
  ) { }

  ngOnInit() {

    this.threads$ = this.store.select(selectAllThreads);
    this.threadsCount$ = this.store.select(selectAllThreadsCount);

    this.store.dispatch(new ThreadActions.LoadAll());

  }

}
