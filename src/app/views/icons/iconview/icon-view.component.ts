import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { isNullOrUndefined } from 'util';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconViewComponent implements OnInit
{

    private _newIconArray:any;
    private _iconButtonCodeExample:string = '';
    private _iconButtonCodeExamplePath:string = 'assets/iconExample/iconButtonCodeExample.html';
    private _iconListCodeExample:string;
    private _iconListCodeExamplePath:string = 'assets/iconExample/iconListCodeExample.html';
    private _iconList:Array<TerraSuggestionBoxValueInterface> = [];
    private _suggestionboxValue:any;

    constructor(private _data:iconService,
                private _scroll:ScrollToViewHelper,
                public http:Http)
    {
        if(process.env.ENV !== 'production')
        {
            this._iconButtonCodeExamplePath = 'src/app/assets/iconExample/iconButtonCodeExample.html';
            this._iconListCodeExamplePath = 'src/app/assets/iconExample/iconListCodeExample.html';
        }

    }

    ngOnInit()
    {
        this.http.get(this._iconButtonCodeExamplePath).subscribe((res:any) =>
        {
            this._iconButtonCodeExample = res.text();
            this._iconButtonCodeExample = this.htmlStringEscape(this._iconButtonCodeExample);
            this._iconButtonCodeExample = `<pre><code class="xml highlight">${this._iconButtonCodeExample}</code></pre>`;
        });
        this.http.get(this._iconListCodeExamplePath).subscribe((res:any) =>
        {
            this._iconListCodeExample = res.text();
            this._iconListCodeExample = this.htmlStringEscape(this._iconListCodeExample);
            this._iconListCodeExample = `<pre><code class="xml highlight">${this._iconListCodeExample}</code></pre>`;
        });
        this._suggestionboxValue = "";
        this._iconList.push({
            caption: "",
            value:   ""
        });
        this._newIconArray = this._data.loadIconArray();
        this.buildSuggestionBoxArray();
    }

    buildSuggestionBoxArray():void
    {
        for(let value of this._newIconArray)
        {
            this._iconList.push(
                {
                    caption: value.iconVariable,
                    value:   value.iconVariable
                });
        }
    }

    private htmlStringEscape(s:string):string
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
