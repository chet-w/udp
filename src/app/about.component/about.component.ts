import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    
        trigger('main', [
          transition('void => *', [
            style({opacity: '0'}),
            animate('500ms ease')
          ])
        ])
    
      ]
})
export class AboutComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle( "About | Unique Design & Print" );

  }
  title = 'About';  
  content = [
    "Unique Design and Print Ltd was formed to provide a friendly high quality design and digital printing service at an affordable price combined with a personal touch. We can undertake all of the design and printing needs of our customers and provide all the appropriate technical advice to complete the job on time and always with a minimum of hassle.",
    "Unique Design and Print is equipped with modern digital printing equipment in partnership with Konica Minolta to provide a first class quality service to our customers.",
    "Our Konica Minolta digital colour printers are able to print in full colour and black and white on to coated and uncoated stock ranging from 80gsm to 300gsm to a maximum sheet size of SRA3.",
    "The wide format HP5500PS printer can produce crisp quality prints up to A0 size on Gloss and Matte stock.",
    "The binding department is geared to provide a quality finishing service including, laminating, drilling, creasing, booklet making and spiral binding.",
    "Our equipment is currently based on the Windows platform. We can accept files originated from Microsoft Word, Exel, Powerpoint, Publisher, Adobe Indesign, Photoshop, Illustrator, Acrobat, Freehand and Coreldraw. We prefer to have these files saved as High Res PDFs to minimize printing problems and obtain the best printing results. Files can be received electronically by email, CD , DVD or USB flash drives.",
    "We are centrally located in the Lower Hutt CBD at 3 Laings Road just behind Briscoes and Rebel Sports. Please contact us at any time for more information."
  ];
  
}
