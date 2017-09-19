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
      bg: "normal"
    },
    {
      title: "Billboard",
      path: "../../assets/img/samples/posters/BillBoard.jpg",
      desc: "A high-resolution, large format Billboard advertisement poster for an upcoming Real Estate section",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Bathiya n Santhush",
      path: "../../assets/img/samples/posters/BnS-Musical-concert-poster.jpg",
      desc: "An advertising poster for a recent musical tour by Sri Lankan music duo Bathiya n Santhush",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Delectable Menu",
      path: "../../assets/img/samples/posters/Delectable-Menu.jpg",
      desc: "A menu poster for a Lower Hutt bakery",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Bathiya n Santhush",
      path: "../../assets/img/samples/posters/BnS-Musical-concert-poster.jpg",
      desc: "An advertising poster for a recent musical tour by Sri Lankan music duo Bathiya n Santhush",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Heating Poster",
      path: "../../assets/img/samples/posters/Heating-Poster.jpg",
      desc: "An advertising poster for Noel Leeming stores to promote sales on heating appliances",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    
  ];

}
