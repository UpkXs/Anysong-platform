import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anysong-octothorpe-with-numeric',
  templateUrl: './octothorpe-with-numeric.component.html',
  styleUrls: ['./octothorpe-with-numeric.component.scss']
})
export class OctothorpeWithNumericComponent implements OnInit {

  @Input() numeric!: number;
  @Input() byWhat!: string;
  // todo aro create new model and get as @Input() this model

  constructor() { }

  ngOnInit(): void {
  }

}
