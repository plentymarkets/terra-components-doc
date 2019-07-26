import {
    Component,
    Input
} from '@angular/core';
import { IconInterface } from './icon-interface';
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
    protected exampleCode:string;

    constructor()
    {
        this.showButtons = false;
    }

    public showButtonsToggle():void
    {
        this.showButtons = !this.showButtons;
        this.exampleCode = `<terra-button inputIcon='${this.iconInterface.variableName}'></terra-button>`;
    }
    public copyText():void
    {
        Clipboard.copy(this.exampleCode);
    }

}

