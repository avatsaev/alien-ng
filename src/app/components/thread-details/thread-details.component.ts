import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../models/thread';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadDetailsComponent implements OnInit {

  @Input() thread: Thread;

  constructor() { }

  ngOnInit() {
  }

}
