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
  quoteID=1;
  public constructor(private titleService: Title, private bim: BrowserAnimationsModule) {
    this.titleService.setTitle(this.title)
    
  }
  mouseDown(id: string) {
    document.getElementById(id).style.transition = "all 0.2s";
    document.getElementById(id).style.width = "150%";
    document.getElementById(id).style.zIndex = "100";
    document.getElementById(id).style.boxShadow = "0 18px 25px 0 rgba(0, 0, 0, 1), 0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 40px 80px 0 rgba(0,0,0,0.1)";
  }

  mouseUp(id: string) {
    document.getElementById(id).style.transition = "all 0.2s";
    document.getElementById(id).style.width = "90%";
    document.getElementById(id).style.zIndex = "1";
    document.getElementById(id).style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0)";
  }

  changeQuote(){
    switch(this.quoteID){
      case 1:{
        document.getElementById('bqMaddox').hidden=true;
        document.getElementById('bqShaw').hidden=false;
        document.getElementById('bqHall').hidden=true;
        document.getElementById('bqSigmarsson').hidden=true;
        this.quoteID++;
        break;
      }
      case 2 : {
        document.getElementById('bqMaddox').hidden=true;
        document.getElementById('bqShaw').hidden=true;
        document.getElementById('bqHall').hidden=false;
        document.getElementById('bqSigmarsson').hidden=true;
        this.quoteID++;
        break;
      }
      case 3 : {
        document.getElementById('bqMaddox').hidden=false;
        document.getElementById('bqShaw').hidden=true;
        document.getElementById('bqHall').hidden=true;
        document.getElementById('bqSigmarsson').hidden=true;
        this.quoteID++;
        break;
      }
      case 4 : {
        document.getElementById('bqMaddox').hidden=true;
        document.getElementById('bqShaw').hidden=true;
        document.getElementById('bqHall').hidden=true;
        document.getElementById('bqSigmarsson').hidden=false;
        this.quoteID=1;
        break;
      }
    }
  }


  public setTitle() {
    this.titleService.setTitle(this.title);
  }
}