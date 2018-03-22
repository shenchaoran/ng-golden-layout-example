import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { GL1Component } from './components/gl1/gl.component';
import { GL2Component } from './components/gl2/gl.component';
import { AppComponent } from './app.component';
import { Layout1Component } from './components/layout1/layout1.component';
import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { AppService } from './app.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        GL1Component,
        GL2Component,
        Layout1Component,
        Child1Component,
        Child2Component,
    ],
    bootstrap: [AppComponent],
    providers: [
        AppService
    ]
})
export class AppModule { }