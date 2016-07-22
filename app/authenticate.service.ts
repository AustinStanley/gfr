import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
    constructor(
        public username: string,
        public password: string) {}
}

var users = [
    new User('test', 'password')
];

@Injectable()
export class AuthenticationService {
    constructor(private _router: Router) {}

    logout(): void {
        localStorage.removeItem('user');
        this._router.navigate(['goodbye']);
    }

    login(user): boolean {
        var authenticatedUser = users.find(u => u.username === user.username);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('user', authenticatedUser);
            this._router.navigate(['private']);
            return true;
        }
        return false;
    }

    checkCredentials(): boolean {
        if (localStorage.getItem('user') === null) {
            return false;
        }
        return true;
    }
}