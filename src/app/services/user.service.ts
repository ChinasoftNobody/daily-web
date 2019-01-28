import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() {
    }

    private loginStatus = false;

    getTitle(): any {
        return 'This is a test title';
    }

    getLoginStatus(): boolean {
        return this.loginStatus;
    }

    login(userName: string, password: string): boolean {
        if (this.loginStatus) {
            return true;
        }
        if (userName && password) {
            this.loginStatus = true;
            return true;
        }
        return false;
        // TODO login
    }
}
