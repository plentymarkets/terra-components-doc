import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector:    'mainview',
  templateUrl: './mainview.component.html',
  styleUrls:   ['./mainview.component.scss']
})
export class MainviewComponent  {

  public componentName:any;

    constructor(public activatedRoute:ActivatedRoute,)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
    }



}
