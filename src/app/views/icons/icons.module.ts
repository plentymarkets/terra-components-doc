import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTemplateComponent } from './icon-template.component';
import { IconViewComponent } from './iconview/icon-view.component';
import { IconSidebarComponent } from './sidebar/icon-sidebar.component';
import { IconApiService } from './service/icon-api.service';
import { TerraComponentsModule } from '@plentymarkets/terra-components';
import { FormsModule } from '@angular/forms';
import { IconItemComponent } from './icon-item-component/icon-item.component';
import { ScrollToViewHelper } from '../../helper/scrollToView.helper';
import { HighlightModule } from 'ngx-highlightjs';
import { IconsRoutingModule } from './icons.routing';

@NgModule({
    imports:      [
        CommonModule,
        IconsRoutingModule,
        FormsModule,
        TerraComponentsModule,
        HighlightModule
    ],
    declarations: [
        IconTemplateComponent,
        IconViewComponent,
        IconSidebarComponent,
        IconItemComponent
    ],
    providers:    [IconApiService, ScrollToViewHelper]
})
export class IconsModule
{}
