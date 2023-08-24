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

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(btnText: string) {
    console.log("fo029OTpv1 :: btnText : " + btnText)
  }
}
