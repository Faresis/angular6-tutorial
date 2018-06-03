import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate([{ outlets: { popup: null }}]);
    this.messagesService.isDisplayed = false;
  }
}
