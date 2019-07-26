import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTemplateComponent } from './icon-template.component';
import { IconViewComponent } from './iconview/icon-view.component';
import { IconSidebarComponent } from './sidebar/icon-sidebar.component';
import { IconService } from './service/icon.service';
import { TerraComponentsModule } from '@plentymarkets/terra-components';
import { FormsModule } from '@angular/forms';
import { IconItemComponent } from './icon-item-component/icon-item.component';
import { ScrollToViewHelper } from '../../helper/scrollToView.helper';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        TerraComponentsModule,
        HighlightModule
    ],
    exports:      [IconTemplateComponent],
    declarations: [
        IconTemplateComponent,
        IconViewComponent,
        IconSidebarComponent,
        IconItemComponent
    ],
    providers:[IconService, ScrollToViewHelper]
})
export class IconsModule
{}
