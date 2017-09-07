import { Injectable } from '@angular/core';

import { ComponentInterface } from './componentInterface.component';
import { CompArrayComponent } from './compArray.components';

@Injectable()
export class ComponentService {
    getCompArray(): Promise<ComponentInterface[]> {
        return Promise.resolve(CompArrayComponent);
    }
}