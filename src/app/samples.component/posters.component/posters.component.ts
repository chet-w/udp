import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'posters',
  templateUrl: '../sample.component.html',
  styleUrls: ['../samples.component.css'],
  animations: [
    
        trigger('main', [
          transition('void => *', [
            style({opacity: '0'}),
            animate('500ms ease')
          ])
        ])
    
      ]
  
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
      title: "Vision Specialists",
      path: "../../assets/img/samples/posters/Vision-Specialists-Poster.jpg",
      desc: "A large, high-resolution advertising poster for Vision Specialists",
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
      title: "Heating Poster",
      path: "../../assets/img/samples/posters/Heating-Poster.jpg",
      desc: "An advertising poster for Noel Leeming stores to promote sales on heating appliances",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Pak 'n' Save Kapiti",
      path: "../../assets/img/samples/posters/Pak-N-Save-Values-poster1.jpg",
      desc: "A motivational poster showcasing some of the key values of Pak 'n' Save Kapiti",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    
  ];

}
