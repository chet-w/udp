import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'newsletters',
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
export class NewslettersComponent {
  title = 'Newsletters';  

  private images = [
    {
      title: "New World Stokes Valley",
      path: "../../assets/img/samples/newsletters/nwsv1.jpg",
      desc: "Front page of a double-sided newsletter for New World Stokes Valley",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "New World Stokes Valley",
      path: "../../assets/img/samples/newsletters/nwsv2.jpg",
      desc: "Back page of a double-sided newsletter for New World Stokes Valley",
      pos: "left",
      textPos: "right",
      bg: "accent"
    }
  ]
}
