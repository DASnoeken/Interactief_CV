import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerliftenComponent } from './powerliften/powerliften.component';
import { DaanComponent } from './daan/daan.component';
import { ProgrammingComponent } from './programming/programming.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerliftenComponent,
    DaanComponent,
    ProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
