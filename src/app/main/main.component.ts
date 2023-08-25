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

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(btnText: string) {
    this.optionSelected = true;
    this.selectedOptionText = btnText;
    console.log("N9ll68DYbF :: this.optionSelected : " + this.optionSelected);
    console.log("2dc8s8lnMV :: this.selectedOptionText : " + this.selectedOptionText);
  }
}
