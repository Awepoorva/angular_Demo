import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input('parentData')
   pd:any;

   @Output()
   public childValue = new EventEmitter();

   emitValue() {
    this.childValue.emit('Hi Priya');
  }
}
