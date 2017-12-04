import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';

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

    constructor(private _data:iconService,
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
        this._newIconArray = this._data.loadIconArray();
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
