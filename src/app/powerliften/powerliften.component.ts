import { Component, ViewChildren } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CollapseComponent } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'int-powerliften',
  templateUrl: 'powerliften.component.html',
  styleUrls: ['../app.component.css']
})
export class PowerliftenComponent {
  title = 'Daan Snoeken';
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  public constructor(private titleService: Title, private bim: BrowserAnimationsModule) {
    this.titleService.setTitle(this.title)
  }
  mouseDown(id: string) {
    document.getElementById(id).style.transition = "all 0.2s";
    document.getElementById(id).style.width = "900px";
    document.getElementById(id).style.height = "506px";
    document.getElementById(id).style.zIndex = "100";
    document.getElementById(id).style.boxShadow = "0 18px 25px 0 rgba(0, 0, 0, 1), 0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 40px 80px 0 rgba(0,0,0,0.1)";
  }

  mouseUp(id: string) {
    document.getElementById(id).style.transition = "all 0.2s";
    document.getElementById(id).style.width = "600px";
    document.getElementById(id).style.height = "337px";
    document.getElementById(id).style.zIndex = "1";
    document.getElementById(id).style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0)";
  }



  public setTitle() {
    this.titleService.setTitle(this.title);
  }
}