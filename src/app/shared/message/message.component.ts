import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error" class="error">
      {{ text }}
    </div>
  `,
  styles: [
    `
    .error{
      background-Color:rgb(221, 70, 116);
      margin-top:5px;
    }
  `
  ],
})
export class MessageComponent {
  @Input() control: FormControl;
  @Input() error: string;
  @Input() text: string;
  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
