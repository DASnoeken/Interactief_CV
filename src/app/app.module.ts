import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerliftenComponent } from './powerliften/powerliften.component';
import { DaanComponent } from './daan/daan.component';
import { DriveComponent } from './drive/drive.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ChartsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerliftenComponent,
    DaanComponent,
    ProgrammingComponent,
    ScienceComponent,
    DriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    WavesModule,
    CollapseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
