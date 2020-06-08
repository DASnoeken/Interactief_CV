import { Component, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'int-science',
    templateUrl: 'science.component.html',
    styleUrls: ['../app.component.css']
})
export class ScienceComponent {
    @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
    constructor(private bim: BrowserAnimationsModule) { }
    
    /*public plotType = 'line';
    public plotDatasets: Array<any> = [
        {data: [], label: 'Voorbeeld potentiaal'}
    ];
    public plotLabels: Array<any> = [];
    public plotColors: Array<any> = [{
        Color: [
            'rgba(255,0,0,1)'
        ]
    }];
    public plotOptions: any = {
        responsive: true,
        title: { display: true, text: 'Voorbeeld potentiaal', fontSize: 25 }
    }
    public plotClicked(e: any): void { }
    public plotHovered(e: any): void { }*/
}