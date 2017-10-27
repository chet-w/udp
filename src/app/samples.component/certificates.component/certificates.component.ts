import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'certificates',
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
export class CertificatesComponent {
  title = 'Certificates';  

  private images = [
    {
      title: "Sunday School",
      path: "../../assets/img/samples/certificates/daham-pasal.jpg",
      desc: "A Certificate of Appreciation for a Sri Lankan Sunday School programme",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Johnsonville Junior Cricket Club",
      path: "../../assets/img/samples/certificates/jjcc.jpg",
      desc: "A Certificate of Participation for Johnsonville Junior Cricket Club",
      pos: "left",
      textPos: "right",
      bg: "accent"
    },
    {
      title: "Hutt City Taekwon Do",
      path: "../../assets/img/samples/certificates/taekwondo1.jpg",
      desc: "A Certificate of Acknowledgement for a tournament for Hutt City Taekwon Do",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Hutt City Taekwon Do",
      path: "../../assets/img/samples/certificates/taekwondo2.jpg",
      desc: "A Certificate of Acknowledgement for a grading for Hutt City Taekwon Do",
      pos: "left",
      textPos: "right",
      bg: "accent"
    }
  ]

}
