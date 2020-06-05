import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'int-powerliften',
    templateUrl: 'powerliften.component.html',
    styleUrls: ['../app.component.css']
})
export class PowerliftenComponent {
    title = 'Daan Snoeken';

    public constructor(private titleService: Title) {
      this.titleService.setTitle(this.title)
     }
  
    public setTitle() {
      this.titleService.setTitle(this.title);
    }
}