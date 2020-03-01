import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationMessage } from '../../models/common/ValidationMessage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.css']
})
export class ValidationSummaryComponent implements OnInit, OnChanges {

  @Input() validationMessage: ValidationMessage;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.validationMessage) {
      if (this.validationMessage.isToast) {
        if (this.validationMessage.type === 'danger') {
          this.validationMessage.messages.forEach(message => {
            this.toastrService.error(message, this.validationMessage.title);
          })
        } else if (this.validationMessage.type === 'success') {
          this.validationMessage.messages.forEach(message => {
            this.toastrService.success(message, this.validationMessage.title);
          })
        }
      }
    }
  }

}
