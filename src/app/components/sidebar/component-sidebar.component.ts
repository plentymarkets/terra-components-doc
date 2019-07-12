import {
    Component,
    OnInit,
    Type
} from '@angular/core';
import { exportedComponents } from '@plentymarkets/terra-components/components/component-collection';

@Component({
    selector:    'component-sidebar',
    templateUrl: './component-sidebar.component.html',
    styleUrls:   ['./component-sidebar.component.scss']
})
export class ComponentSidebarComponent implements OnInit
{
    private groupArray:Array<any> = [];
    private jsonMetaData:Array<any> = [];

    protected components:Array<Type<any>> = exportedComponents.sort((a:Type<any>, b:Type<any>) => a.name.localeCompare(b.name));

    constructor()
    {
    }

    ngOnInit()
    {
        let componentGroup = [];

        for(let components of this.jsonMetaData)
        {
            let obGroup =
                {
                    groupName: components.componentGroup
                };
            componentGroup.push(obGroup);
        }

        this.groupArray = componentGroup.reduce(function(a, b)
        {
            if(a.indexOf(b.groupName) == -1)
            {
                a.push(b.groupName);
            }
            return a;
        }, []);

        componentGroup = [];
        let iterator = 0;

        for(let group of this.groupArray)
        {
            componentGroup.push([group]);
            componentGroup[iterator].push([]);
            iterator++;
        }

        for(let i in componentGroup)
        {
            for(let component of this.jsonMetaData)
            {
                if(component.componentGroup === componentGroup[i][0])
                {
                    componentGroup[i][1].push({component: component.name});
                }
            }
        }
        this.groupArray = componentGroup;
    }
}
