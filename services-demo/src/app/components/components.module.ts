import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent,
  FactoryDemoComponent,
  ExistingDemoComponent,
  ValueDemoComponent,
  ClassDemoComponent,
  NoServiceFoundComponent,
  TaskListComponent,
  TaskListOrderedComponent,
  ForwardRefDemoComponent,
  MProviderDemoComponent,
  HostDemoComponent,
  SomeDirDirective,
  ProvidedInDemoComponent
} from '.';

import { Highlight1Directive, Highlight2Directive } from './../directives';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElementRefDemoComponent,
    FactoryDemoComponent,
    ExistingDemoComponent,
    ValueDemoComponent,
    ClassDemoComponent,
    NoServiceFoundComponent,
    TaskListComponent,
    TaskListOrderedComponent,
    ForwardRefDemoComponent,
    Highlight1Directive,
    Highlight2Directive,
    MProviderDemoComponent,
    HostDemoComponent,
    SomeDirDirective,
    ProvidedInDemoComponent
  ],
  exports: [
    NoServiceFoundComponent,
    ElementRefDemoComponent,
    ValueDemoComponent,
    ClassDemoComponent,
    ExistingDemoComponent,
    FactoryDemoComponent,
    TaskListComponent,
    TaskListOrderedComponent,
    ForwardRefDemoComponent,
    MProviderDemoComponent,
    HostDemoComponent,
    ProvidedInDemoComponent
  ]
})
export class ComponentsModule {}
