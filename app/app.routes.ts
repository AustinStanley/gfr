import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FamilyTreeComponent} from './family-tree/family-tree.component';
import {PrivateComponent} from './private.component';
import {GoodbyeComponent} from './goodbye.component';

const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'family-tree', component: FamilyTreeComponent},
    {path: 'private', component: PrivateComponent},
    {path: 'goodbye', component: GoodbyeComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];