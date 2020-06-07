import { Component, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'int-programming',
    templateUrl: 'programming.component.html',
    styleUrls: ['../app.component.css']
})
export class ProgrammingComponent {
    @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
    constructor(private bim: BrowserAnimationsModule) { }

    public overigType: string = 'horizontalBar';
    public overigDatasets: Array<any> = [
        {data: [40,10,10,20,20,0,100],label: 'Overig skills'}
    ];
    public overigLabels: Array<any> = ['GitHub','Scrum','Agile','UML','XAMPP'];
    public overigColors: Array<any> = [
        {
            backgroundColor: [
                'rgba(36, 41, 46, 0.4)',
                'rgba(29, 120, 200, 0.4)',
                'rgba(255, 35, 77, 0.4)',
                'rgba(116, 69, 173, 0.4)',
                'rgba(251, 123, 36, 0.4)'
            ],
            borderColor:[
                'rgba(36, 41, 46, 1)',
                'rgba(29, 120, 200, 1)',
                'rgba(255, 35, 77, 1)',
                'rgba(116, 69, 173, 1)',
                'rgba(251, 123, 36, 1)'
            ],
            borderWidth: 2
        }
    ];
    public overigOptions: any = {
        responsive: true,
        title: { display: true, text: 'Mijn Overige Vaardigheden', fontSize: 25 }
    };
    public overigClicked(e: any): void { }
    public overigHovered(e: any): void { }

    public frontendType: string = 'horizontalBar';
    public frontendDatasets: Array<any> = [
        { data: [30, 20, 30, 30, 20, 0, 100], label: 'Frontend Skills' }
    ];
    public frontendLabels: Array<any> = ['HTML5', 'TypeScript', 'CSS3', 'Angular 6', 'Bootstrap'];
    public frontendColors: Array<any> = [
        {
            backgroundColor: [
                'rgba(255, 35, 77, 0.4)',
                'rgba(56, 158, 173, 0.4)',
                'rgba(29, 120, 200, 0.4)',
                'rgba(220, 3, 48, 0.4)',
                'rgba(116, 69, 173, 0.4)'
            ],
            borderColor: [
                'rgba(255, 35, 77, 1)',
                'rgba(56, 158, 173, 1)',
                'rgba(29, 120, 200, 1)',
                'rgba(195, 14, 45, 1)',
                'rgba(88, 61, 128,1)'
            ],
            borderWidth: 2
        }
    ];
    public frontendOptions: any = {
        responsive: true,
        title: { display: true, text: 'Mijn Frontend Vaardigheden', fontSize: 25 }
    };
    public frontendClicked(e: any): void { }
    public frontendHovered(e: any): void { }

    public backendType: string = 'horizontalBar';
    public backendDatasets: Array<any> = [
        { data: [30, 30, 90, 20, 30, 30, 20, 90, 0, 100], label: 'Backend Skills' }
    ];
    public backendLabels: Array<any> = ['Spring', 'JPA', 'Ubuntu Linux', 'Maven', 'REST/HTTP', 'Swagger', 'JUnit', 'Windows 10'];
    public backendColors: Array<any> = [
        {
            backgroundColor: [
                'rgba(109, 179, 63, 0.4)',
                'rgba(56, 177, 173, 0.4)',
                'rgba(221, 72, 20, 0.4)',
                'rgba(255, 35, 77, 0.4)',
                'rgba(56, 158, 173, 0.4)',
                'rgba(109, 154, 0, 0.4)',
                'rgba(220, 82, 74, 0.4)',
                'rgba(35, 118, 188, 0.4)'
            ],
            borderColor: [
                'rgba(109, 179, 63, 1)',
                'rgba(56, 177, 173, 1)',
                'rgba(221, 72, 20, 1)',
                'rgba(255, 35, 77, 1)',
                'rgba(56, 158, 173, 1)',
                'rgba(109, 154, 0, 1)',
                'rgba(37, 161, 98, 1)',
                'rgba(35, 118, 188, 1)'
            ],
            borderWidth: 2
        }
    ];
    public backendOptions: any = {
        responsive: true,
        title: { display: true, text: 'Mijn Backend Vaardigheden', fontSize: 25 }
    };
    public backendClicked(e: any): void { }
    public backendHovered(e: any): void { }

    public talenType: string = 'horizontalBar';

    public talenDatasets: Array<any> = [
        { data: [70, 80, 40, 30, 10, 90, 90, 50, 0, 100], label: 'Mijn Skills' }
    ];

    public talenLabels: Array<any> = ['Java', 'C++', 'Python', 'SQL', 'Fortran', 'Matlab', 'Scilab', 'Bash'];

    public talenColors: Array<any> = [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(56, 177, 173, 0.4)',
                'rgba(56, 123, 163, 0.4)',
                'rgba(220, 135, 100, 0.4)',
                'rgba(190, 110, 150, 0.4)',
                'rgba(220, 90, 160, 0.4)',
                'rgba(190, 50, 180, 0.4)',
                'rgba(25,200,120,0.4)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(56, 177, 173, 1)',
                'rgba(56, 123, 163, 1)',
                'rgba(220, 135, 100, 1)',
                'rgba(190, 110, 150, 1)',
                'rgba(190, 50, 180, 1)',
                'rgba(220, 90, 160, 1)',
                'rgba(25,200,120,1)'
            ],
            borderWidth: 2
        }
    ];

    public talenOptions: any = {
        responsive: true,
        title: { display: true, text: 'Mijn Programmeer Vaardigheden', fontSize: 25 }
    };
    public talenClicked(e: any): void { }
    public talenHovered(e: any): void { }

}