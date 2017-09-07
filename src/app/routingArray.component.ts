//
//
//
// export class RoutingArrayComponent {
//
//     compArray: ComponentInterface[];
//
//     constructor(private componentService: ComponentService) { }
//
//     getCompArray(): void {
//         this.componentService
//             .getCompArray()
//             .then(compArray => this.compArray = compArray);
//     }
//
//     ngOnInit(): void {
//         this.getCompArray();
//         this.createRouting();
//     }
//
//
//     createRouting(): void {
//         let routingArray = this.getCompArray();
//         const routes:Routes = [
//
//             {
//                 path:      'terra-button',
//                 component: MainviewComponent,
//                 children:
//                     [
//                         { path: '', redirectTo: 'overview', pathMatch: 'full' },
//                         {path:'overview',component:OverviewComponent},
//                         {path:'example',component:ExampleComponent},
//                         {path:'api',component:ApiComponent}
//
//                     ]
//             }
//         ];
//     }
//
// }

