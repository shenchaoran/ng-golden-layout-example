import { Component, Input } from '@angular/core';
//import { AppService }   from './app.service';

@Component({
    selector: 'app',
    //providers: [AppService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
