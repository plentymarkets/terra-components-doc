import {
    RouterModule,
    Routes
} from '@angular/router';
import { IconTemplateComponent } from './icon-template.component';
import { NgModule } from '@angular/core';

const routes:Routes = [{
    path:      '',
    component: IconTemplateComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconsRoutingModule
{
}
