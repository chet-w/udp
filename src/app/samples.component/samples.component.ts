import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';


@Component({
  selector: 'samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css'],
  animations: [
    
        trigger('main', [
          transition('void => *', [
            style({opacity: '0'}),
            animate('500ms ease')
          ])
        ])
    
      ]
})
export class SamplesComponent {
  
  title = 'Samples';    
  private sampleTypes = [
    {
      title: "Posters",
      show: true
    },
    {
      title: "Logos",
      show: false
    },
    {
      title: "Business Cards",
      show: false
    },
    {
      title: "Certificates",
      show: false
    },
    {
      title: "Invitations",
      show: false
    },
    {
      title: "Flyers",
      show: false
    },
    {
      title: "Brochures",
      show: false
    },
    {
      title: "Letterheads",
      show: false
    },
    {
      title: "Newsletters",
      show: false
    }

  ];
  
  public showSample(s: string): void{


    if(s == "Posters"){
      this.sampleTypes[0].show = true;
      this.hideOthers(0)      
    } else if(s == "Logos"){
      this.sampleTypes[1].show = true;
      this.hideOthers(1)      
    } else if(s == "Business Cards"){
      this.sampleTypes[2].show = true;
      this.hideOthers(2)      
    } else if(s == "Certificates"){
      this.sampleTypes[3].show = true;
      this.hideOthers(3)      
    } else if(s == "Invitations"){
      this.sampleTypes[4].show = true;
      this.hideOthers(4)      
    } else if(s == "Flyers"){
      this.sampleTypes[5].show = true;
      this.hideOthers(5)      
    } else if(s == "Brochures"){
      this.sampleTypes[6].show = true;
      this.hideOthers(6)      
    } else if(s == "Letterheads"){
      this.sampleTypes[7].show = true;
      this.hideOthers(7)      
    } else if(s == "Newsletters"){
      this.sampleTypes[8].show = true;
      this.hideOthers(8)      
    }
  }

  public hideOthers(index: number): void {
    for(var i = 0; i < this.sampleTypes.length; i++){
      if(i == index){
        this.sampleTypes[i].show = true;
      }else{
        this.sampleTypes[i].show = false;
      }
    }
  }
}
