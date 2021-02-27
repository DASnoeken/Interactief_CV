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
import { HavamalComponent } from './havamal/havamal.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PowerliftenComponent,
    DaanComponent,
    ProgrammingComponent,
    ScienceComponent,
    DriveComponent,
    HavamalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    WavesModule,
    CollapseModule,
    BrowserAnimationsModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
