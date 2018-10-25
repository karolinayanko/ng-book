import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;

  constructor(public threadsService: ThreadsService) { }

  ngOnInit(): void {
    this.threadsService.currentThread
      .subscribe((currentThread: Thread) => {
        this.selected = currentThread
          && this.thread
          && currentThread.id === this.thread.id;
      });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }

}