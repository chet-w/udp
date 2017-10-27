import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'flyers',
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
export class FlyersComponent {
  title = 'Flyers';  
  private images = [
    {
      title: "Absolutely Positive Accountants Ltd",
      path: "../../assets/img/samples/flyers/apa1.jpg",
      desc: "A promotional flyer for a local Accounting Company",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Bhante Ji",
      path: "../../assets/img/samples/flyers/meditation1.jpg",
      desc: "An informational flyer on a local priest",
      pos: "left",
      textPos: "right",
      bg: "accent"
    },
    {
      title: "Bhante Ji",
      path: "../../assets/img/samples/flyers/meditation2.jpg",
      desc: "An informational flyer on a local priest",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Nails",
      path: "../../assets/img/samples/flyers/nails.jpg",
      desc: "A pricing flyer for Nails by Donna",
      pos: "left",
      textPos: "right",
      bg: "accent"
    },
    {
      title: "Salute Hair & Day Spa",
      path: "../../assets/img/samples/flyers/salute.jpg",
      desc: "A mother's day promotional flyer from Salute Hair & Day Spa",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/flyers/wcc1.jpg",
      desc: "An informational flyer for the Wellington School of Cricket's Holiday Programme",
      pos: "left",
      textPos: "right",
      bg: "accent"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/flyers/wcc1.jpg",
      desc: "An informational flyer for the Wellington School of Cricket's Holiday Programme",
      pos: "right",
      textPos: "left",
      bg: "normal"
    }
  ]

}
