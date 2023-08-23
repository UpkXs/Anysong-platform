import {Component, Input} from '@angular/core';

@Component({
  selector: 'anysong-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() btnText!: string;

  constructor() { }

}
