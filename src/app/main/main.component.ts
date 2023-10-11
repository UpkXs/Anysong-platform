import { Component, OnInit } from '@angular/core';

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
  selectedOptionText!: string;
  selectedOptionNumber!: number;

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(btnText: string, btnNumber: number) {
    this.optionSelected = true;
    this.selectedOptionText = btnText;
    this.selectedOptionNumber = btnNumber;
    console.log("N9ll68DYbF :: this.optionSelected : " + this.optionSelected);
    console.log("2dc8s8lnMV :: this.selectedOptionText : " + this.selectedOptionText);
  }
}
