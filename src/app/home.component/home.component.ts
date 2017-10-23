import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home'; 
  
  content = [
    "Unique Design and Print Ltd is a family owned business located in Lower Hutt and dedicated to providing a range of services in the digital printing industry.",
    "We take pride in undertaking the graphic design, digital printing and finishing requirements of our valued customers and offer a friendly service at extremely competitive prices. Every effort is made to maintain a consistently high standard of printing and meet required deadlines at all times.",
    "Unique Design and Print is owned and operated by Hasi who has the experience of over 14 years in the digital printing industry in New Zealand. His skills as a graphic designer and his knowledge and experience as a digital printer ensures that every job is completed with total commitment and accuracy to ensure total customer satisfaction.",
    "Unique Design and Print is proud to be in partnership with Konica Minolta."
  ];
  showcase = [
    {
      title: "Professional Graphic Design",
      detail: "Have your new poster, flyer, or newsletter tailor-made and crafted with precision by an expert of the trade."
    },
    {
      title: "Quality Digial Printing",
      detail: "Using the finest of machinery and resources to deliver incredible results for all your printing needs."
    },
    {
      title: "Outstanding Signage",
      detail: "Posters, stickers, footpath and outdoor signs and more - a wide range to suit the signage you need."
    }
  ];
}
