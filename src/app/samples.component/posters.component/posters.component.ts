import { Component } from '@angular/core';

@Component({
  selector: 'posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent {
  title = 'Posters';  

  private images = [
    {
      title: "80th Birthday",
      path: "../../assets/img/samples/posters/80th-Birthday.jpg",
      desc: "A sepia tone Welcome sign for an 80th birthday event",
      pos: "left",
      textPos: "right",
      
    }
  ]
}
