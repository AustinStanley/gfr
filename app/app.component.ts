import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FamilyTreeComponent} from './family-tree/family-tree.component';

@Component({
    selector: 'gfr-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, FamilyTreeComponent]
})
export class AppComponent {
    pageTitle: string = 'Griffith Family Reunion';
}