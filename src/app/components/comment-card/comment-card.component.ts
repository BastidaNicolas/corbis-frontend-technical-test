import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CommentData {
  id: number;
  date: string;
  author: string;
  comment: string;
  replies: Reply[] | [];
}
interface Reply {
  id: number;
  date: string;
  author: string;
  comment: string;
}

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent {
  @Input()
  comment!: CommentData;
  showButtons = false;
  showReplies = false;
  datePipe = new DatePipe('en-US');
  originalDate: string = '';
  formattedDate = this.datePipe.transform(this.originalDate, 'MMM. d, yyyy, h:mm a');

  ngOnInit(): void {
    this.originalDate = this.comment.date;
    this.formattedDate = this.datePipe.transform(this.originalDate, 'MMM. d, yyyy, h:mm a');
  }

  setShowReplies(): void {
    this.showReplies = !this.showReplies;
  }
}
