import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FamilyTreeComponent} from './family-tree/family-tree.component';
import {AuthenticationService, User} from './authenticate.service';

@Component({
    selector: 'gfr-app',
    providers: [AuthenticationService],
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, FamilyTreeComponent]
})
export class AppComponent {
    pageTitle: string = 'Griffith Family Reunion';
    public user: User = new User('','');
    public errorMsg: string = '';

    constructor(private _service: AuthenticationService) {}

    login(): void {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Invalid credentials';
            return;
        }

        $('.modal').modal('toggle');
    }

    logout(): void {
        this._service.logout();
    }

    clearError(): void {
        this.errorMsg = '';
    }

    clearCredentials(): void {
        this.user.username = '';
        this.user.password = '';
    }

    isLoggedIn(): boolean {
        return this._service.checkCredentials();
    }
}