import { Component, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'business-cards',
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
export class BusinessCardsComponent {
  title = 'Business Cards';  

  private images = [
    {
      title: "Small Business Accounting",
      path: "../../assets/img/samples/business-cards/accounting.jpg",
      desc: "Business Card design for Lower Hutt company Small Business Accounting",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Electrician",
      path: "../../assets/img/samples/business-cards/alan-martin.jpg",
      desc: "Business Card design for Lower Hutt electrician Allan Martin",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Aquamax Hydrobasting",
      path: "../../assets/img/samples/business-cards/aquamax1.jpg",
      desc: "Double-sided Business Card design for Aquamax Hydroblasting Limited",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Aquamax Hydrobasting",
      path: "../../assets/img/samples/business-cards/aquamax2.jpg",
      desc: "Double-sided Business Card design for Aquamax Hydroblasting Limited",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "La' Shika Bridal",
      path: "../../assets/img/samples/business-cards/bridal.jpg",
      desc: "Business Card Design for local bridal design business La' Shika Bridal",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Delectable Bakers",
      path: "../../assets/img/samples/business-cards/delectable.jpg",
      desc: "Business Card design for Lower Hutt based Delectable Bakers",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Dress Designer",
      path: "../../assets/img/samples/business-cards/dress.jpg",
      desc: "Business Card design for a Sri Lanka-based dress designer",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Hutt Safe City Group",
      path: "../../assets/img/samples/business-cards/hutt-city-safe.jpg",
      desc: "Business Card design for neighbourhood support group Hutt City Safe Group Incorperated",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "What's Your View",
      path: "../../assets/img/samples/business-cards/hutt-radio.jpg",
      desc: "Business Card design OneWellington.co.nz",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Hutt Radio",
      path: "../../assets/img/samples/business-cards/hutt-radio1.jpg",
      desc: "Business Card design for Hutt Radio Presenter John Terris",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Jennie Mackie Ltd",
      path: "../../assets/img/samples/business-cards/jennie-mackie.jpg",
      desc: "Business Card design for Jennie Mackie Ltd",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Therapeutic Massage",
      path: "../../assets/img/samples/business-cards/kim-turton.jpg",
      desc: "Business Card design for foot masseuce Kim Turton",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Meditation Centre",
      path: "../../assets/img/samples/business-cards/meditation.jpg",
      desc: "Business Card design for a preist at a local Meditation Centre",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Get Nailed",
      path: "../../assets/img/samples/business-cards/nails.jpg",
      desc: "Business Card design for a Local Nail Technician ",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Platinum Paint and Panel",
      path: "../../assets/img/samples/business-cards/panel-paint.jpg",
      desc: "Business Card design for Dale Smith of Platinum Paint and Panel Ltd",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Quality Air",
      path: "../../assets/img/samples/business-cards/quality-air.jpg",
      desc: "Business Card design for Tony Canderle of Quality Air",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Relish Corporate Catering Specialists",
      path: "../../assets/img/samples/business-cards/relish.jpg",
      desc: "Business Card design for a Wellington Catering company",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
    {
      title: "Hutt City Taekwon Do",
      path: "../../assets/img/samples/business-cards/taekwondo.jpg",
      desc: "Business Card design for Greg O'Brien from Hutt City Taekwon Do",
      pos: "right",
      textPos: "left",
      bg: "accent"
    },
    {
      title: "Unique Design & Print",
      path: "../../assets/img/samples/business-cards/udp.jpg",
      desc: "Business Card design for our very own Hasi Wijesekera",
      pos: "left",
      textPos: "right",
      bg: "normal"
    },
  ]

}
