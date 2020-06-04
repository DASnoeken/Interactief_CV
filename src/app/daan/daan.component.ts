import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'int-daan',
    templateUrl: 'daan.component.html'
})
export class DaanComponent {
    mouseUp() {
        document.getElementById("pasfoto").style.transition = "all 0.2s";
        document.getElementById("pasfoto").style.width = "200px";
        document.getElementById("pasfoto").style.height = "200px";
        document.getElementById("pasfoto").style.zIndex = "1";
    }
    mouseDown() {
        document.getElementById("pasfoto").style.transition = "all 0.3s";
        document.getElementById("pasfoto").style.width = "473px";
        document.getElementById("pasfoto").style.height = "487px";
        document.getElementById("pasfoto").style.zIndex = "100";
    }
}