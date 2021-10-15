import { Component, ViewChildren, Inject } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'int-drive',
    templateUrl: 'drive.component.html',
    styleUrls: ['../app.component.css']
})
export class DriveComponent{
    @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
    constructor(private bim: BrowserAnimationsModule, @Inject(DOCUMENT) private document: Document) { }

    toHavamal(): void{
        this.document.location.href = this.document.location.origin + '/havamal';
    }
}