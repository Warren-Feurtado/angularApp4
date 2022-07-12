import { Component, OnInit } from '@angular/core';
import { MessasgeService } from '../messasge.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessasgeService) { }

  ngOnInit(): void {
  }

}
