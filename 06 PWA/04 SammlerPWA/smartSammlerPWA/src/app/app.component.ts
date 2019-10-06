import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { CloudMessage } from './shared/messaging/message.schema';
import { MessagingService } from './shared/messaging/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private swUpdate: SwUpdate,
    private messagingService: MessagingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.attachUpdateHandler();
    this.setupMessaging();
  }

  private setupMessaging() {
    this.messagingService.requestPermission(environment.userID);
    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe((msg: CloudMessage) => {
      if (msg != null) {
        this.snackBar.open(msg.notification.body, msg.notification.title, {
          duration: 3000
        });
      }
    });
  }

  private attachUpdateHandler() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
