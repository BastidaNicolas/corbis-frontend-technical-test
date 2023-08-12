import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Reply {
  id: number;
  date: string;
  author: string;
  comment: string;
}

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.scss']
})
export class ReplyCardComponent {
  @Input()
  reply!: Reply;
  datePipe = new DatePipe('en-US');
  originalDate: string = "";
  formattedDate = this.datePipe.transform(this.originalDate, 'MMM. d, yyyy, h:mm a'); // This will hold the formatted date

  ngOnInit(): void {
    this.originalDate =  this.reply.date;
    this.formattedDate = this.datePipe.transform(this.originalDate, 'MMM. d, yyyy, h:mm a');
  }
}
