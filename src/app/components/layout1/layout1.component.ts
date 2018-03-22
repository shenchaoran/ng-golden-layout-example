import { Component, Input } from '@angular/core';
//import { AppService }   from './app.service';

@Component({
    selector: 'layout1',
    //providers: [AppService],
    template: `
        <div id='root-container'>
            <golden-layout>Loading...</golden-layout>
        </div>
    `,
    styleUrls: ['./layout1.component.scss']
})
export class Layout1Component {}
