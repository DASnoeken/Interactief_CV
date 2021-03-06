import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


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
  changeWindow($event) {
    this.router.navigateByUrl($event.target.value);
  }
  getWindow() {
    return this.router.url;
  }
  goToLink(url: string) {
    this.router.navigate(["/"]).then(result => { window.open(url, "_blank") })
  }
  sendMail(){
    window.open("mailto:d.a.snoeken@protonmail.com","_self");
  }
  getCV() {
    let link = document.createElement("a");
    link.download = "CV";
    link.href = "../assets/CV/CV.pdf";
    link.click();
  }

  public isCollapsed = true;
}
