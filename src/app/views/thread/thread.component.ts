import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Thread} from "../../models/thread";
import {Store} from "@ngrx/store";
import {ApplicationState, selectThread} from "../../store/application.state";
import * as ThreadActions from '../../store/thread.actions'

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.sass']
})
export class ThreadComponent implements OnInit {

  thread$: Observable<Thread>

  constructor(private activatedRoute: ActivatedRoute, private store: Store<ApplicationState>) { }

  ngOnInit() {

    this.thread$ = this.store.select( state => selectThread(state, this.activatedRoute.snapshot.params['id']));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new ThreadActions.Load(params['id']))
    })
  }

}
