import {
    Component,
    OnInit,
    Type,
    ViewChild
} from '@angular/core';
import { exportedComponents } from '@plentymarkets/terra-components/components/component-collection';
import {
    ComponentDataInterface,
    componentMap
} from '../component-data.map';
import { TerraTextInputComponent } from '@plentymarkets/terra-components';

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
    public groups:Array<GroupInterface> = [];
    public components:Array<Type<any>> = exportedComponents.sort((a:Type<any>, b:Type<any>) => a.name.localeCompare(b.name));
    public searching:boolean = false;

    @ViewChild(TerraTextInputComponent)
    private textInput:TerraTextInputComponent;

    public ngOnInit():void
    {
        this.groups = this.determineGroups();
    }

    private determineGroups(searchString:string = ''):Array<GroupInterface>
    {
        const cleanSearchString:string = searchString.replace('-', '');
        let groups:Array<GroupInterface> = Object.values(componentMap).reduce((acc:Array<string>, cur:ComponentDataInterface) =>
        {
            if(!acc.includes(cur.group))
            {
                return acc.concat(cur.group);
            }
            return acc;
        }, []).sort().concat('Others').map((groupName:string) =>
        {
            return {
                name:       groupName,
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
                    const compGroup:GroupInterface = groups.find(
                        (group:GroupInterface) => group.name === componentData.group
                    );
                    if(compGroup && component.name.toLowerCase().includes(cleanSearchString.toLowerCase()))
                    {
                        compGroup.components.push(component);
                        return;
                    }
                }
            }
            // const othersGroup:GroupInterface = this.groups[this.groups.length - 1];
            // othersGroup.components.push(component);
        });

        // return only groups that contain components
        return groups.filter((group:GroupInterface) => group.components.length > 0);
    }

    public search(searchText:string):void
    {
        this.groups = this.determineGroups(searchText);
    }

    public cancelSearch():void
    {
        this.searching = false;
        this.groups = this.determineGroups();
    }

    public activateSearch():void
    {
        this.searching = true;
        setTimeout(() => this.textInput.focusNativeInput()); // delay focus since the input will just be rendered when `searching` is set to true
    }
}
