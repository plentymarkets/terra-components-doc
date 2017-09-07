import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { OverviewComponent } from './templates/overview/overview.template';
import{ExampleComponent} from './templates/example/example.template';
import {ApiComponent} from './templates/api/api.template';

const routes:Routes = [

    {
        path:      'terra-button',
        component: OverviewComponent,
        children:
            [
                {path:'overview',component:OverviewComponent},
                {path:'example',component:ExampleComponent},
                {path:'api',component:ApiComponent}

            ]
    }
];

@NgModule
({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
export class AppRoutingModule
{
}