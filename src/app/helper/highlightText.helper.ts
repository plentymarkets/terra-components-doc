import { Injectable } from '@angular/core';

@Injectable()
export class HighlightTextHelper
{

    constructor()
    {
    }

    public highlightText(t, tT)
    {
        let hT = this._htmlStringEscape(t);
        return `<pre><code class="${tT} highlight">${hT}</code></pre>`;
    }

    private _htmlStringEscape(s:string):string
    {
        return s.replace(/[&"<>]/g, function(c)
        {
            return {
                '&': "&amp;",
                '"': "&quot;",
                '<': "&lt;",
                '>': "&gt;"
            }[c];
        });
    }

}
