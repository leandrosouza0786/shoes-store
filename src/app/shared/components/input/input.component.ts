import {
  Component,
  Input,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterContentInit {
  @Input() label: string;
  @Input() id: '';
  @Input() message: string;
  input;

  @ContentChild(NgModel, { static: true }) model: NgModel;
  @ContentChild(FormControlName, { static: true }) control: FormControlName;

  constructor() {}

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error(
        'This component must be used with an directive a ngModel or formControlName'
      );
    }
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
