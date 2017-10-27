import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'brochures',
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
export class BrochuresComponent {
  title = 'Brochures';  

  private images = [
    {
      title: "Meditation Centre",
      path: "../../assets/img/samples/brochures/meditation1.jpg",
      desc: "A local Buddhist Temple's information brochure.",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Meditation Centre",
      path: "../../assets/img/samples/brochures/meditation2.jpg",
      desc: "A local Buddhist Temple's information brochure.",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Bathiya n Santhush",
      path: "../../assets/img/samples/brochures/musical1.jpg",
      desc: "A double-sided brochure for recent musical tour by Sri Lankan music duo Bathiya n Santhush.",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Bathiya n Santhush",
      path: "../../assets/img/samples/brochures/musical2.jpg",
      desc: "A double-sided brochure for recent musical tour by Sri Lankan music duo Bathiya n Santhush.",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Victoria House",
      path: "../../assets/img/samples/brochures/vichouse1.jpg",
      desc: "An information brochure for local university dorm Victoria House",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Victoria House",
      path: "../../assets/img/samples/brochures/vichouse1.jpg",
      desc: "An information brochure for local university dorm Victoria House",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/brochures/wcc2.jpg",
      desc: "A promotional flyer for the Wellington School of Cricket - Junior Training Programme",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/brochures/wcc1.jpg",
      desc: "A promotional flyer for the Wellington School of Cricket - Junior Training Programme featuring detailed course information",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/brochures/wcc3.jpg",
      desc: "A brochure for Wellington School of Cricket's one-on-one coaching",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Wellington School of Cricket",
      path: "../../assets/img/samples/brochures/wcc4.jpg",
      desc: "A promotional flyer for the Wellington School of Cricket - Junior Training Programme featuring detailed course information",
      pos: "right",
      textPos: "left",
      bg: "normal"
    },
    {
      title: "Stokes Valley Golf",
      path: "../../assets/img/samples/brochures/sv-golf1.jpg",
      desc: "An informational brochure for a local golfing fundraiser in Stokes Valley",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Stokes Valley Golf",
      path: "../../assets/img/samples/brochures/sv-golf2.jpg",
      desc: "An informational brochure for a local golfing fundraiser in Stokes Valley",
      pos: "right",
      textPos: "left",
      bg: "accent"
    }
    
  ];

}
