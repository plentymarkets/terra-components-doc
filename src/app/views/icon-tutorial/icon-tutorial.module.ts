import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTutorialComponent } from './icon-tutorial.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TerraComponentsModule } from '@plentymarkets/terra-components';

@NgModule({
    declarations: [IconTutorialComponent],
    imports:      [
        CommonModule,
        HighlightModule,
        TerraComponentsModule
    ],
    exports:      [IconTutorialComponent]
})
export class IconTutorialModule
{}
