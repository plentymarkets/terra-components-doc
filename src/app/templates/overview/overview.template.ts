import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HighlightJsService } from 'angular2-highlight-js';


@Component({
               selector: 'overview-template',
               template: require('./overview.template.html'),
               styles:   [require('./overview.template.scss')]

           })

export class OverviewComponent implements OnInit, AfterViewInit
{
    public componentName:string;

    private _html:string;
    private _codeOutput:string;

    constructor(public activatedRoute:ActivatedRoute,
                public http:Http,
                private highlightJsService:HighlightJsService)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;

        http.get('assets/docu/build/' + this.componentName + '.html').subscribe((res:any) => {
            this._html = res.text();
        });
    }


    ngOnInit()
    {
        this.addContent();

    }

    ngAfterViewInit()
    {


    }

    highlightByService(target:ElementRef)
    {
        this.highlightJsService.highlight(target);
    }

    addContent()
    {
        this._codeOutput = `
   <pre>
    <code class="typescript highlight">
import {
    Component
} from '@angular/core';

@Component({
               selector: 'terra-button-example',
               styles:   [require('./terra-button.component.example.scss')],
               template: require('./terra-button.component.example.html')
           })
export class TerraButtonComponentExample
{
    private buttonName:string;

    constructor()
    {
      this.buttonName ='hello';
    }

    public changeName():void
    {
        if(this.buttonName =='hello')
        {
            this.buttonName = 'world';
        }
        else
        {
            this.buttonName ='hello';
        }
    }
}

        
    


            </code>
        </pre>`;
    }
}

