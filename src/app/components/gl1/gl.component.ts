import {
    Component, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef, ReflectiveInjector, HostListener,
    ElementRef
} from '@angular/core';
import { Layout1Component } from '../layout1/layout1.component';
// declare var GoldenLayout: any;
import * as GoldenLayout from 'golden-layout';
import * as jQuery from 'jquery';

@Component({
    selector: 'golden-layout',
    template: `<div style="width: 100%; height: 100%;z-index: 10" id="layout"></div>`
})
export class GL1Component {
    private config: any;
    private layout: any;

    constructor(private el: ElementRef, private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.config = {
            content: [{
                type: 'row',
                content: [
                    {
                        type: 'component',
                        title: 'Left',
                        componentName: 'test1',
                        width: 10
                    },
                    {
                        type: 'column',
                        width: 60,
                        content: [
                            {
                                type: 'component',
                                title: 'Right Top',
                                componentName: 'test1',
                                height: 70
                            },
                            {
                                type: 'component',
                                title: 'Right Bottom',
                                componentName: 'test1',
                                height: 30
                            }
                        ]
                    }]
            }]
        };
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.layout.updateSize();
    }

    ngOnInit() {
        this.layout = new GoldenLayout(this.config, jQuery(this.el.nativeElement).find("#layout"));

        this.layout.registerComponent('test1', (container, componentState) => {
            // let factory = this.componentFactoryResolver.resolveComponentFactory(Layout1Component);
        });

        this.layout.init();
    }
}