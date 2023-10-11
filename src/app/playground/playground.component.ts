import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anysong-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @Input() numeric!: number;
  @Input() byWhat!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
