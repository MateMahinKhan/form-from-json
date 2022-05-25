import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/interfaces/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isTouched() {
    return this.form.controls[this.question.key].dirty;
  }

  getMaxDate() {
    return new Date().toISOString().substring(0, 10);
  }
}
