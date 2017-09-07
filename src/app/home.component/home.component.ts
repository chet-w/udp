import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home'; 
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
    "Signs",
    "Photo Re-touching",
    "Stickers"
  ]
} 
