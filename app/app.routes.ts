import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'family-tree', component: FamilyTreeComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];