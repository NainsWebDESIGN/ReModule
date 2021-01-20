import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { FatherComponent, FatherOne, FatherThree } from './father/father.component';
import { ChildModule } from './father/children/child.module';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    FatherOne,
    FatherThree
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
