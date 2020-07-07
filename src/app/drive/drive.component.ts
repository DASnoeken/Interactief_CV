import { Component, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'int-drive',
    templateUrl: 'drive.component.html',
    styleUrls: ['../app.component.css']
})
export class DriveComponent{
    @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
    constructor(private bim: BrowserAnimationsModule) { }
}