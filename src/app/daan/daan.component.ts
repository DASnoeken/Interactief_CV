import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'int-daan',
    templateUrl: 'daan.component.html',
    styleUrls: ['../app.component.css']
})
export class DaanComponent {
    mouseUp() {
        document.getElementById("pasfoto").style.transition = "all 0.2s";
        document.getElementById("pasfoto").style.width = "200px";
        document.getElementById("pasfoto").style.height = "200px";
        document.getElementById("pasfoto").style.zIndex = "1";
        document.getElementById("pasfoto").style.boxShadow = "0 12px 16px 0 rgba(0, 0, 0, 0)";
    }
    mouseDown() {
        document.getElementById("pasfoto").style.transition = "all 0.3s";
        document.getElementById("pasfoto").style.width = "473px";
        document.getElementById("pasfoto").style.height = "487px";
        document.getElementById("pasfoto").style.zIndex = "100";
        document.getElementById("pasfoto").style.boxShadow = "0 18px 25px 0 rgba(0, 0, 0, 1), 0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 40px 80px 0 rgba(0,0,0,0.1)";
    }
}