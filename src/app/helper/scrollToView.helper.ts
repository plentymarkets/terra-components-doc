import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ScrollToViewHelper
{

    constructor()
    {
    }

    scrollToId(iconId):void
    {
        if(iconId != "")
        {
            let iconContainer = window.document.getElementById(iconId);
            iconContainer.scrollIntoView();

            let documentWidth = window.document.body.offsetWidth;
            let scrollValue = 50;

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
