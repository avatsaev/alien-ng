import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class MockService {

  constructor(private http: Http) { }
  
  
  getThreads(): Observable<any> {
    return this.http.get('/assets/mock-threads.json').map(res => res.json());
  }

}
