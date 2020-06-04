import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PowerliftenComponent } from './powerliften/powerliften.component';
import { DaanComponent } from './daan/daan.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ScienceComponent } from './science/science.component';
import { DriveComponent } from './drive/drive.component';

const routes: Routes = [
  { path: 'hoi', component: AppComponent },
  { path: 'powerliften', component: PowerliftenComponent },
  { path: 'daan', component: DaanComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'drive', component: DriveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
