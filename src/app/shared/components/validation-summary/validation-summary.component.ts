import { Component, OnInit, Input } from '@angular/core';
import { ValidationMessage } from '../../models/common/ValidationMessage';

@Component({
  selector: 'app-validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.css']
})
export class ValidationSummaryComponent implements OnInit {

  @Input() vaidationMessage: ValidationMessage;

  constructor() { }

  ngOnInit() {
  }

}
