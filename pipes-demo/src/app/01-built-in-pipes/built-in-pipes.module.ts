import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AsyncObservablePipeComponent,
  CurrencyPipeComponent,
  DatePipeComponent,
  I18nPluralPipeComponent,
  I18nSelectPipeComponent,
  JsonPipeComponent,
  LowerUpperCasePipeComponent,
  NumberPipeComponent,
  PercentPipeComponent,
  SlicePipeComponent
} from '.';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    LowerUpperCasePipeComponent,
    DatePipeComponent,
    JsonPipeComponent,
    NumberPipeComponent,
    CurrencyPipeComponent,
    PercentPipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    SlicePipeComponent,
    AsyncObservablePipeComponent
  ],
  exports: [
    LowerUpperCasePipeComponent,
    DatePipeComponent,
    JsonPipeComponent,
    NumberPipeComponent,
    CurrencyPipeComponent,
    PercentPipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    SlicePipeComponent,
    AsyncObservablePipeComponent
  ]
})
export class BuiltInPipesModule {}
