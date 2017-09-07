import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title = 'Services';  

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
