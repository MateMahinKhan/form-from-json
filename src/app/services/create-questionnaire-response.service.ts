import { Injectable } from '@angular/core';
import { Questionnaire } from 'src/app/interfaces/form-controls';

@Injectable()
export class CreateQuestionnaireResponseService {
  getQuestionaireResponse(
    payLoad: { [key: string]: string },
    jsonQuestions: Questionnaire
  ) {
    const arr = Object.keys(payLoad).map((key) => ({
      linkId: key,
      value: payLoad[key],
      text: this.getQuestionText(key, jsonQuestions),
    }));
    const response = {
      resourceType: 'QuestionnaireResponse',
      questionnaire: jsonQuestions.id,
      subject: jsonQuestions.subjectType,
      item: [...arr],
    };
    return response;
  }

  getQuestionText(linkId: string, jsonQuestions: Questionnaire): string {
    const item = jsonQuestions.item.find((v) => v.linkId === linkId);
    return item ? item.text : '';
  }
}
