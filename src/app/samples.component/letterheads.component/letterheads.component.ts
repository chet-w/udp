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

}
