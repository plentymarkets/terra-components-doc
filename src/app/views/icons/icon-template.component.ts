import {
    Component,
    HostListener
} from '@angular/core';

@Component({
    selector:    'icon-template',
    templateUrl: './icon-template.component.html',
    styleUrls:   ['./icon-template.component.scss']
})
export class IconTemplateComponent
{
    public changeCol:boolean;

    constructor()
    {
        this.changeCol = false;
    }

    @HostListener('window:resize', ['$event'])
    onResize()
    {
        let screenWidth = window.innerWidth;
        this.changeCol = (screenWidth <= 1300);
    }


}
