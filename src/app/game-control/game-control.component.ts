import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('outPutNumber') counter = 0;
  flag = true;
  @Output() counterEvent = new EventEmitter <{counter: number}>();

  constructor() { }

  onClickStart() {
    setInterval(() => {
      if (this.flag === true) {
        this.counter++;
        this.counterEvent.emit({counter: this.counter});
      }
    }, 100);
  }
  onClickStop() {
    this.counter = 0;
    this.flag = !this.flag;
  }

  ngOnInit(): void {
  }

}
