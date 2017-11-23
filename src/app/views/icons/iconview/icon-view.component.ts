import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';


@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconviewComponent implements OnInit
{
    private _newIconArray:any;
    private _color:Array<any>;

    constructor(private _iconService:iconService)
    {
        this._color = [];
    }

    ngOnInit()
    {
        this._newIconArray = this._iconService.loadIconArray();
        this._color = [
            {
                color:     "green",
                colorCode: "color: #4cad33;"
            },
            {
                color:     "blackblue",
                colorCode: "color: #354763;"
            },
            {
                color:     "blue",
                colorCode: "color: #008ebd;"
            },
            {
                color:     "grey",
                colorCode: "color: #707173;"
            },
            {
                color:     "lightgrey",
                colorCode: "color: #c7c7c7;"
            },
            {
                color:     "orange",
                colorCode: "color: #ffa100;"
            },
            {
                color:     "purple",
                colorCode: "color: #870e6d;"
            },
            {
                color:     "red",
                colorCode: "color: #d4021d;"
            },
            {
                color:     "yellow",
                colorCode: "color: #ffce36;"
            },
            {
                color:     "darkerred",
                colorCode: "color: #910000;"
            },
            {
                color:     "darkergreen",
                colorCode: "color: #066011;"
            },
            {
                color:     "darkerblue",
                colorCode: "color: #354763;"
            }
        ];
        this.addColor();
    }

    addColor():void
    {
        for(let value of this._newIconArray)
        {
            for(let color of this._color)
            {
                if(value.icon.includes(color.colorCode))
                {
                    document.getElementsByClassName(value.icon)[0]
                        .setAttribute("style", color.colorCode);
                }
            }
        }
    }


}
