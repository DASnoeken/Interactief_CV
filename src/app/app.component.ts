import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daan Snoeken';

  public constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle(this.title)
  }

  public setTitle() {
    this.titleService.setTitle(this.title);
  }
  test($event) {
    console.log($event.target.value);
  }
  changeWindow($event) {
    this.router.navigateByUrl($event.target.value);
  }
  goToLink(url:string){
    //surl="www."+url+".com";
    
    this.router.navigate(["/"]).then(result=>{window.location.href = url;})
    //document.location.href=url;
  }
}
