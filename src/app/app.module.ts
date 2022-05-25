import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionComponent } from './questionnaire-form/question/question.component';
import { GetQuestionService } from './services/get-question.service';
import { QuestionControlService } from './services/question-control.service';
import { CreateQuestionnaireResponseService } from './services/create-questionnaire-response.service';

@NgModule({
  declarations: [AppComponent, QuestionnaireFormComponent, QuestionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    GetQuestionService,
    QuestionControlService,
    CreateQuestionnaireResponseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
