import {Component, Input, OnInit} from '@angular/core';
import {AnysongButton} from "../../model/AnysongButton";

@Component({
  selector: 'anysong-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @Input() selectedOptionButton!: AnysongButton;

  constructor() { }

  ngOnInit(): void {
  }

}
