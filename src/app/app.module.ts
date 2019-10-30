import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducer } from './reducers/counter.reducer';
import { CounterChangeEffect } from './effects/counter.effects';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { SmartComponentComponent } from './smart-component/smart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    SmartComponentComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: reducer
    }),
    EffectsModule.forRoot([CounterChangeEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
