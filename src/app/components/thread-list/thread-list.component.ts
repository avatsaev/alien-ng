import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../models/thread';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadListComponent implements OnInit {

  @Input() threads: Thread[];

  constructor() { }

  ngOnInit() {
  }

}
