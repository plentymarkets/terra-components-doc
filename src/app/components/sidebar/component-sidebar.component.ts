import {
    Component,
    OnInit,
    Type
} from '@angular/core';
import { exportedComponents } from '@plentymarkets/terra-components/components/component-collection';
import {
    ComponentDataInterface,
    componentMap
} from '../../component-data.map';

interface GroupInterface
{
    name:string;
    components:Array<Type<any>>;
}

@Component({
    selector:    'tcd-component-sidebar',
    templateUrl: './component-sidebar.component.html',
    styleUrls:   ['./component-sidebar.component.scss']
})
export class ComponentSidebarComponent implements OnInit
{
    protected groups:Array<GroupInterface> = [];
    protected components:Array<Type<any>> = exportedComponents.sort((a:Type<any>, b:Type<any>) => a.name.localeCompare(b.name));

    public ngOnInit():void
    {
        this.groups = Object.values(componentMap).reduce((acc:Array<string>, cur:ComponentDataInterface) =>
        {
            if(!acc.includes(cur.group))
            {
                return acc.concat(cur.group);
            }
            return acc;
        }, []).concat('Others').map((groupName:string) =>
        {
            return {
                name: groupName,
                components: []
            };
        });

        exportedComponents.forEach((component:Type<any>) =>
        {
            const componentName:string = component.name;
            const componentData:ComponentDataInterface = componentMap[componentName];
            if(componentData)
            {
                if(componentData.group)
                {
                    const compGroup:GroupInterface = this.groups.find(
                        (group:GroupInterface) => group.name === componentData.group
                    );
                    if(compGroup)
                    {
                        compGroup.components.push(component);
                        return;
                    }
                }
            }
            const othersGroup:GroupInterface = this.groups[this.groups.length - 1];
            othersGroup.components.push(component);
        });
    }
}
