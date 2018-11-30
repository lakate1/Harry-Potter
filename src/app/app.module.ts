import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HarryComponent } from './harry/harry.component';
import { RonComponent } from './ron/ron.component';
import { HermioneComponent } from './hermione/hermione.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HarryComponent,
    RonComponent,
    HermioneComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
