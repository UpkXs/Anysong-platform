import { Component, OnInit } from '@angular/core';
import {AnysongButton} from "../../model/AnysongButton";

@Component({
  selector: 'anysong-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  byArtist: string = 'by Artist';
  bySong: string = 'by Song';
  selectTheOptions: string = 'select the options...';
  optionSelected: boolean = false;
  selectedOptionButton!: AnysongButton;

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(numeric: number, btnText: string) {
    this.optionSelected = true;
    this.selectedOptionButton = {
      numeric: numeric,
      btnText: btnText
    }
    console.log("N9ll68DYbF :: this.optionSelected : " + this.optionSelected);
    console.log("2l034qCcYv :: this.selectedOptionButton : " + this.selectedOptionButton);
  }
}
