import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anysong-octothorpe-with-numeric',
  templateUrl: './octothorpe-with-numeric.component.html',
  styleUrls: ['./octothorpe-with-numeric.component.scss']
})
export class OctothorpeWithNumericComponent implements OnInit {

  // todo aro change to selected option text
  @Input() numeric!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
