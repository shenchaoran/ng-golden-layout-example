import {
    Component, 
    ComponentFactoryResolver, 
    HostListener, 
    ComponentFactory, 
    ComponentRef, 
    ViewContainerRef, 
    ReflectiveInjector,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
// declare let GoldenLayout: any;
import * as GoldenLayout from 'golden-layout';

@Component({
    selector: 'golden-layout2',
    template: `
        <div style="width:100%;height:500px;" id="layout" #layout>
            My First Angular 2 App
        </div>
        <br/>
        <button (click)="sendEvent()">Send event through hub</button>
    `,
    entryComponents: [Child1Component, Child2Component]
})
export class GL2Component {
    private config: any;
    @ViewChild('layout') private layout: GoldenLayout;

    constructor(private el: ElementRef, private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.config = {
            content: [{
                type: 'row',
                content: [{
                    type: 'component',
                    componentName: 'test1',
                    componentState: {
                        message: "Top Left"
                    }
                }, {
                    type: 'column',
                    content: [{
                        type: 'component',
                        componentName: 'test2',
                        componentState: {
                            message: "Top Right"
                        }
                    }, {
                        type: 'component',
                        componentName: 'test1',
                        componentState: {
                            message: "Bottom Right"
                        }
                    }]
                }]
            }]
        };
    }

    ngOnInit() {
        this.layout = new GoldenLayout(this.config, $(this.el.nativeElement).find('#layout'));

        this.layout.registerComponent('test1', (container, componentState) => {
            let factory = this.componentFactoryResolver.resolveComponentFactory(Child1Component);

            var compRef = this.viewContainer.createComponent(factory);
            compRef.instance.setEventHub(this.layout.eventHub);
            compRef.instance.message = componentState.message;
            container.getElement().append(compRef.location.nativeElement);

            compRef.changeDetectorRef.detectChanges();
        });

        this.layout.registerComponent('test2', (container, componentState) => {
            let factory = this.componentFactoryResolver.resolveComponentFactory(Child2Component);

            var compRef = this.viewContainer.createComponent(factory);
            compRef.instance.setEventHub(this.layout.eventHub);
            compRef.instance.message = componentState.message;
            container.getElement().append(compRef.location.nativeElement);


            container["compRef"] = compRef;
            compRef.changeDetectorRef.detectChanges();
        });

        this.layout.init();

        this.layout.on("itemDestroyed", item => {
			if (item.container != null) {
				let compRef = item.container["compRef"];
				if (compRef != null) {
					compRef.destroy();
				}
			}
		});
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this.layout)
            this.layout.updateSize();
    }

    sendEvent() {
        if (this.layout)
            this.layout.eventHub.emit("someEvent");
    }
}

