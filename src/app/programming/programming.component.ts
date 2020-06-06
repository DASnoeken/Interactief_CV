import { Component } from '@angular/core';

@Component({
    selector: 'int-programming',
    templateUrl: 'programming.component.html',
    styleUrls: ['../app.component.css']
})
export class ProgrammingComponent {
    public chartType: string = 'horizontalBar';

    public chartDatasets: Array<any> = [
        { data: [80, 60, 30, 70, 50, 40, 40, 10, 80, 80, 20, 0, 100], label: 'Mijn Skills' }
    ];

    public chartLabels: Array<any> = ['Java', 'C++', 'Python', 'HTML', 'TypeScript', 'CSS', 'SQL', 'Fortran', 'Matlab', 'Scilab', 'Bash'];

    public chartColors: Array<any> = [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(56, 177, 173, 0.4)',
                'rgba(56, 123, 163, 0.4)',
                'rgba(255, 35, 77, 0.4)',
                'rgba(56, 158, 173, 0.4)',
                'rgba(29, 120, 200, 0.4)',
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
                'rgba(255, 35, 77, 1)',
                'rgba(56, 158, 173, 1)',
                'rgba(29, 120, 200, 1)',
                'rgba(220, 135, 100, 1)',
                'rgba(190, 110, 150, 1)',
                'rgba(190, 50, 180, 1)',
                'rgba(220, 90, 160, 1)',
                'rgba(25,200,120,1)'
            ],
            borderWidth: 2,
        }
    ];

    public chartOptions: any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
}