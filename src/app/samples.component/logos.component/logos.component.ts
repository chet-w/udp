import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'logos',
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
export class LogosComponent {
  title = 'Logos';  

  images = [
    {
      title: "Anointed Cleaning Services",
      path: "../../assets/img/samples/logos/anointed.jpg",
      desc: "A logo designed for Annoited Cleaning Services",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Pretty Spoilt",
      path: "../../assets/img/samples/logos/pretty-spoilt.jpg",
      desc: "A logo designed for local beauty salon Pretty Spoilt",
      pos: "left",
      textPos: "right",
      bg: "accent"
    },
    {
      title: "Hutt City Taekwon Do",
      path: "../../assets/img/samples/logos/taekwondo.jpg",
      desc: "A logo designed for Hutt City Taekwon Do",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Unique Design & Print",
      path: "../../assets/img/samples/logos/udp.jpg",
      desc: "A logo designed in-house for Unique Design & Print Ltd.",
      pos: "left",
      textPos: "right",
      bg: "accent"
    }
    
  ]

}
