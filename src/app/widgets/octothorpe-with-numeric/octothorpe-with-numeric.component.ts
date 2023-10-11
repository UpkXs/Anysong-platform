import {Component, Input, OnInit} from '@angular/core';
import {AnysongButton} from "../../../model/AnysongButton";

@Component({
  selector: 'anysong-octothorpe-with-numeric',
  templateUrl: './octothorpe-with-numeric.component.html',
  styleUrls: ['./octothorpe-with-numeric.component.scss']
})
export class OctothorpeWithNumericComponent implements OnInit {

  @Input() selectedOptionButton!: AnysongButton;

  constructor() { }

  ngOnInit(): void {
  }

}
