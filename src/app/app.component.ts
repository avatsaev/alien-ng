import {Component, OnInit} from '@angular/core';
import {MockService} from './services/mock.service';
import {Store} from '@ngrx/store';
import {ApplicationState} from './store/application.state';
import {LoadAllThreadsAction} from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
      private mockS: MockService,
      public store: Store<ApplicationState>) {}

  ngOnInit() {
    this.mockS.getThreads().subscribe(res => {
      console.log('loaded threads: ', res['threads']);
      this.store.dispatch(new LoadAllThreadsAction(res['threads']))
    });

    this.store.subscribe(res => console.log('store updated' , res));
  }

}
