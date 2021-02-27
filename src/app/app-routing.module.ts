import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PowerliftenComponent } from './powerliften/powerliften.component';
import { DaanComponent } from './daan/daan.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ScienceComponent } from './science/science.component';
import { DriveComponent } from './drive/drive.component';
import { HavamalComponent } from './havamal/havamal.component';

const routes: Routes = [
  { path: 'hoi', component: AppComponent },
  { path: 'powerliften', component: PowerliftenComponent },
  { path: 'daan', component: DaanComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'drive', component: DriveComponent },
  { path: 'cbd5f2a8-7d80-4479-a91a-3d2cbc192653', component: HavamalComponent } // todo: set proper path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
