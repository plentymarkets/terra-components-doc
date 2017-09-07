///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {
    Translation,
    TranslationService
} from 'angular-l10n';
import {RoutingService} from "./routing-service.component";
import {ComponentService} from "./component-service.component";

@Component({
    selector: 'app-component',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent extends Translation implements OnInit {
    private myVariable: string;

    public constructor(public translation: TranslationService,
                       private routingService: RoutingService,
                       private componentService: ComponentService) {
        super(translation);

        this.myVariable = "Test123";
    }

    ngOnInit(): void {
        this.componentService.getCompArray().then(
            (res: any) => this.routingService.createRoutes(res)
        );
    }
}
