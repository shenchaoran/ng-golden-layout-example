import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppService }   from '../../app.service';


@Component({
  selector: 'my-app',
  templateUrl: './child1.component.html' 
})
export class Child1Component implements OnInit, OnDestroy {
  @Input() message: string = "Not set";
  private eventHub: any;
  private eventReceived: boolean = false;
  private inputValue = "initial value";
  
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
  
  ngOnInit() {
    console.log("OnInit");
  }
  
  ngOnDestroy() {
    console.log("OnDestroy");
  }
}