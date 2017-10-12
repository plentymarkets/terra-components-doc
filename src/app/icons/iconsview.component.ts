import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Component({
    selector:    'iconview',
    templateUrl: './iconview.component.html',
    styleUrls:   ['./iconview.component.scss']
})
export class IconviewComponent implements OnInit
{

    private _iconArray:any;
    private _iconVariableArray:any = [];
    private _pathCounter:number;

    private _html:string;

    constructor(public http:Http)
    {
        this._html = '';
        this._pathCounter = 0;
    }

    ngOnInit()
    {
        this.getIconArray().subscribe(
            (data:any) =>
            {
                this._iconArray = data;
                this.createNewIconArray();
                this.createIconHtml();
            }
        );

    }

    public createIconHtml():any
    {
        for(let i = 0; i < this._iconVariableArray.length; i++)
        {

            let lenghtOfIconName:number = this._iconVariableArray[i].length;

            if(!(this._iconVariableArray[i].includes("path")))
            {
                this._html = this._html + ` 
                    <div class="glyph fs1">
                        <div class="clearfix bshadow0 pbs">
                            <span class="${this._iconVariableArray[i]}"></span>
                            <span class="mls">${this._iconVariableArray[i]}</span>
                          </div>
                    </div>`;
            }
            else
            {
                if(this._iconVariableArray[i].substring(lenghtOfIconName - 5) == 'path1')
                {
                    let pathString:string = '';
                    this._pathCounter = 1;
                    let iconVariableName:string = this._iconVariableArray[i].substring(0, lenghtOfIconName - 6);

                    for(; this._iconVariableArray[i].includes(iconVariableName); i++)
                    {

                        pathString = pathString + `<span class="path${this._pathCounter}"></span>`;
                        this._pathCounter++;

                    }

                    this._html = this._html + ` 
                    <div class="glyph fs1">
                        <div class="clearfix bshadow0 pbs">
                            <span class="${iconVariableName}">
                            ${pathString}
                            </span>
                            <span class="mls">${iconVariableName}</span>
                          </div>
                    </div>`;
                }
            }
        }
    }

    public getIconArray():Observable<any>
    {
        return this.http.get('./node_modules/@plentymarkets/terra-components/JSON/variables.json')
                   .map((res:any) => res.json());
    }

    public createNewIconArray():any
    {
        for(let data in this._iconArray)
        {
            if(data.includes('icon-') && !data.includes('-icon'))
            {
                this._iconVariableArray.push(data);
            }
        }
    }
}
