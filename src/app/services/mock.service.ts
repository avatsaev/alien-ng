import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class MockService {

  constructor(private http: Http) { }
  
  
  getThreads(): Observable<any> {
    return this.http.get('/assets/mock-threads.json')
        .delay(400)
        .map(res => res.json());
  }

  getThread(id: string): Observable<any> {
    return this.http.get('/assets/mock-threads.json')
        .delay(400)
        .map(res => res.json()['threads'])
        .map(threads => threads.filter(t => t.id === id)[0]);
  }

}
