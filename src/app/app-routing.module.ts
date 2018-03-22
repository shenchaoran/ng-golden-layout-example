import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Layout1Component } from './components/layout1/layout1.component';
import { GL2Component } from './components/gl2/gl.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', redirectTo: '1', pathMatch: 'full' },
            {
                path: '1',
                component: Layout1Component
            },
            {
                path: '2',
                component: GL2Component
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
