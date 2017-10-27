import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'invitations',
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
export class InvitationsComponent {
  title = 'Invitations';  

  private images = [
    {
      title: "50th Birthday",
      path: "../../assets/img/samples/invitations/50th.jpg",
      desc: "An invitation for a surprise 50th birthday party",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Rotary Club Changeover",
      path: "../../assets/img/samples/invitations/changeover.jpg",
      desc: "An invitation for the local Rotary Club's Presidential Changeover",
      pos: "left",
      textPos: "right",
      bg: "accent"
    }
    
  ]

}
