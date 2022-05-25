import { Injectable } from '@angular/core';
import {
  DropdownQuestion,
  QuestionBase,
  TextboxQuestion,
  CheckboxQuestion,
  DateQuestion,
} from 'src/app/interfaces/questions';
import { Questionnaire } from 'src/app/interfaces/form-controls';

@Injectable()
export class GetQuestionService {
  getQuestions(jsonQuestions: Questionnaire) {
    let questions: QuestionBase<string>[] = [];
    questions = jsonQuestions.item.map((val): any => {
      let question = {
        label: val.text,
        key: val.linkId,
        required: true,
      };
      if (val.type === 'boolean') {
        return new CheckboxQuestion({
          ...question,
          type: 'checkbox',
          value: false,
          required: false,
        });
      } else if (val.type === 'choice') {
        const options = val.option?.map((op) => {
          return {
            key: op.valueCoding.code,
            value: op.valueCoding.display,
          };
        });
        return new DropdownQuestion({
          ...question,
          options: options,
        });
      } else if (val.type === 'date') {
        return new DateQuestion({
          ...question,
        });
      } else if (val.type === 'string') {
        return new TextboxQuestion({
          ...question,
        });
      }
    });
    return questions;
  }
}
