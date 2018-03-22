import { Component, Input } from '@angular/core';
import { AppService }   from '../../app.service';


@Component({
  selector: 'my-app2',
  templateUrl: './child2.component.html' 
})
export class Child2Component {
  @Input() message: string = "Not set";
  private eventHub: any; 
  private eventReceived: boolean = false;
  
  constructor(private service: AppService){
    
  }
  
  setEventHub(hub: any){
    this.eventHub = hub;
    //Register your events here
    
    this.eventHub.on("someEvent", ()=>{
      this.eventReceived = true;
    });
  }
  
  onClick(){
    this.service.add();
    this.message = "Clicked !";
  }
}