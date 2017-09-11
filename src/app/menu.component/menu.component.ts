import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })
  export class MenuComponent {
    title = 'app works!'; 
    
    private barOne;
    private barTwo;
    private barThree;
    private nav;

    public flipCross(){
        this.barOne = document.getElementById("bar-one");  
        this.barTwo = document.getElementById("bar-two"); 
        this.barThree = document.getElementById("bar-three"); 
        this.nav = document.getElementById("myNav");

        if(this.barTwo.style.opacity == "0"){
            this.closeCross();
            
        }else {
            this.openCross();
        }
    }

    public closeNav() {
        document.getElementById("myNav").style.width = "0%";
        
    }

    public openCross(){
        this.barOne.style.transform = "rotate(-45deg) translate(-4px, 2px)";
        this.barTwo.style.opacity = "0"; 
        this.barThree.style.transform = "rotate(45deg) translate(-8px, -8px)";
        this.nav.style.width = "100%";
        this.toggleScroll();
    }

    public closeCross(){
        this.closeNav();
        this.barOne.style.transform = "rotate(0) translate(0)";
        this.barTwo.style.opacity = "1"; 
        this.barThree.style.transform = "rotate(0) translate(0)";
        this.nav.style.width = "0%";
        console.log(this.nav);
    }

    public toggleScroll(){
       var doc = document.getElementsByTagName("html");
       doc[0].style.overflowY = "hidden";

    }
}