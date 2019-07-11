import {
    Component,
    Input
} from '@angular/core';
import { IconInterface } from './icon-interface';
import { HighlightTextHelper } from '../../../helper/highlightText.helper';
import { Clipboard } from 'ts-clipboard';

@Component({
    selector: 'icon-item-component',
    templateUrl: './icon-item.component.html',
    styleUrls:   ['./icon-item.component.scss']
})
export class IconItemComponent
{
    @Input() public iconInterface: IconInterface;
    public showButtons:boolean;
    public buttonExampleCode:string;
    private exampleCode:string;

    constructor(private highlightTextHelper:HighlightTextHelper)
    {
        this.showButtons = false;
    }

    public showButtonsToggle():void
    {
        this.showButtons = !this.showButtons;
        this.exampleCode = `<terra-button inputIcon='${this.iconInterface.variableName}'></terra-button>`;
        this.buttonExampleCode = this.highlightTextHelper.highlightText(this.exampleCode, 'xml');
    }
    public copyText():void
    {
        Clipboard.copy(this.exampleCode);
    }

}

