import {
    Component,
    OnInit
} from '@angular/core';

@Component(
    {
        selector: 'sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
export class SidebarComponent implements OnInit {

    // heroes: Hero[];
    // selectedHero: Hero;
    //
    // constructor(
    //     private heroService: HeroService,
    //     private router: Router) { }
    //
    // getHeroes(): void {
    //     this.heroService
    //         .getHeroes()
    //         .then(heroes => this.heroes = heroes);
    // }

    ngOnInit() {

    }

}

