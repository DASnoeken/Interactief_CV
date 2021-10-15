import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'int-daan',
    templateUrl: 'daan.component.html',
    styleUrls: ['../app.component.css']
})
export class DaanComponent {
    timeDiff:number = Math.abs(Date.now() - Date.parse("1993-09-14"));
    age:number = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);

    mouseUp(id:string) {
        document.getElementById(id).style.transition = "all 0.2s";
        if(id==='pasfoto'){
            document.getElementById(id).style.width = "200px";
            document.getElementById(id).style.height = "200px";
        }else if(id==='badge'){
            document.getElementById(id).style.width = "150px";
            document.getElementById(id).style.height = "150px";
        }else if(id==='EasydusLogo'){
            document.getElementById(id).style.width = "300px";
            document.getElementById(id).style.height = "150px";
        }
        document.getElementById(id).style.zIndex = "1";
        document.getElementById(id).style.boxShadow = "0 12px 16px 0 rgba(0, 0, 0, 0)";
    }
    mouseDown(id:string) {
        document.getElementById(id).style.transition = "all 0.3s";
        if(id==='pasfoto'){
            document.getElementById(id).style.width = "473px";
            document.getElementById(id).style.height = "487px";
            document.getElementById(id).style.boxShadow = "0 18px 25px 0 rgba(0, 0, 0, 1), 0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 40px 80px 0 rgba(0,0,0,0.1)";
        }else if(id==='badge'){
            document.getElementById(id).style.width = "300px";
            document.getElementById(id).style.height = "300px";
        }else if(id==='EasydusLogo'){
            document.getElementById(id).style.width = "600px";
            document.getElementById(id).style.height = "300px";
            document.getElementById(id).style.boxShadow = "0 18px 25px 0 rgba(0, 0, 0, 1), 0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 40px 80px 0 rgba(0,0,0,0.1)";
        }
        document.getElementById(id).style.zIndex = "100";
    }
}