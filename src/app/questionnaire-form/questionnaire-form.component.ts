import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/assets/questionnaire';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControlOptions,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { Questionnaire } from '../interfaces/form-controls';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionBase } from '../interfaces/questions';
import { GetQuestionService } from '../services/get-question.service';
import { CreateQuestionnaireResponseService } from '../services/create-questionnaire-response.service';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  form!: FormGroup;

  questions: QuestionBase<string>[] | null = [];
  jsonQuestions = Questions;
  payLoadString = '';

  constructor(
    private questionControlService: QuestionControlService,
    private getQuestionService: GetQuestionService,
    private createQuestionnaireResponseService: CreateQuestionnaireResponseService
  ) {}

  ngOnInit() {
    // GetQuestionService takes our questionaire and
    // creates an array of all the questions objects that are
    // easily understood by our frontend app.
    this.questions = this.getQuestionService.getQuestions(this.jsonQuestions);

    // QuestionControlService takes the questions and creates a form with them
    // and returns that form
    this.form = this.questionControlService.toFormGroup(
      this.questions as QuestionBase<string>[]
    );
  }

  onSubmit() {
    let payLoad = this.form.getRawValue() as { [key: string]: string };

    // The payload from the form and our json questionnaire is sent to
    // CreateQuestionnaireResponseService to create a QuestionnaireResponse
    const questionnaireResponse =
      this.createQuestionnaireResponseService.getQuestionaireResponse(
        payLoad,
        this.jsonQuestions
      );
    console.log(questionnaireResponse);
    this.payLoadString = JSON.stringify(questionnaireResponse);
  }
}
