import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute} from '@angular/router';
import { DynamicPluginLoaderComponent } from '../../core/dynamic-module-loader/dynamic-module-loader.component';



@Component({
               selector: 'overview-template',
               template: require('./overview.template.html'),
               styles:   [require('./overview.template.scss')]
           })

export class OverviewComponent implements OnInit
{

    private _renderExample: string;

    constructor(private activatedRoute:ActivatedRoute)
    {
    }
    ngOnInit()
    {
        this._renderExample = this.activatedRoute.routeConfig.data.exampleSelector;
    }

}

