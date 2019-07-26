import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ScrollToViewHelper
{
    public scrollToId(iconId:string):void
    {
        if(iconId)
        {
            const iconContainer:HTMLElement = window.document.getElementById(iconId);
            iconContainer.scrollIntoView();

            const documentWidth:number = window.document.body.offsetWidth;
            let scrollValue:number = 50;

            if(!isNullOrUndefined(documentWidth) && !isNaN(documentWidth))
            {
                if(documentWidth < 1200 && documentWidth > 768)
                {
                    scrollValue = 86;
                }
            }
            window.scrollBy(0, -scrollValue);
        }
    }
}
