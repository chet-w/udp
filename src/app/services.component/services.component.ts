import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title = 'Services';  
  content = [
    "Our facilities feature industrial standard printing machines and are equipped with professional design software to ensure that we can deliver the highest quality for your needs."
  ];
  jobs = [
    "Graphic Designing",
    "Digital Printing",
    "Photocopying",
    "Wide Format Posters",
    "Guillotining",
    "Laminating",
    "Spiral & Wire Binding",
    "Business Cards",
    "Promotional Flyers",
    "Letterheads",
    "Complimentary Slips",
    "Mail Merges",
    "Birthday & Wedding Invites",
    "Newsletters",
    "Calendars",
    "Stickers",
    "Signs",
    "Footpath Signs",
    "Photo Retouching",
    "CD/DVD Burning",
    "Fridge Magnets"
  ]
}