import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'letterheads',
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
export class LetterheadsComponent {
  title = 'Letterheads';  

  private images = [
    {
      title: "Meditation Centre",
      path: "../../assets/img/samples/letterheads/monk.jpg",
      desc: "A letterhead design for the Dhamma Gavesi Meditation Centre",
      pos: "right",
      textPos: "left",
      bg: "normal"
    }
  ]

}
