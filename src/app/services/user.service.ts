import {Injectable, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {USER_TOKEN_KEY} from './const.service';
import {HttpService} from './http.service';
import {daily_server} from './rest.config';
import {catchError, last, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService implements OnInit {
    private loginStatus = false;
    private user: any;

    constructor(private cookie: CookieService,
                private httpService: HttpService) {
    }

    ngOnInit(): void {
        const userToken = this.cookie.get(USER_TOKEN_KEY);
        if (!!userToken) {
            this.verifyUserByToken(userToken);
        } else {
            this.loginStatus = false;
        }

    }

    getLoginStatus(): boolean {
        return this.loginStatus;
    }

    login(userName: string, password: string): boolean {
        if (this.loginStatus) {
            return true;
        }
        if (userName && password) {
            this.httpService.postObj(daily_server.path('verifyUserInfo'), {
                name: userName, path: password
            }).subscribe( result => {
                console.log(result);
            }, err => {
                console.error(err);
            });
            this.loginStatus = true;
            return true;
        }
        return false;
    }

    /**
     * 退出登录
     */
    logout(): void {
        this.loginStatus = false;
        this.cookie.delete(USER_TOKEN_KEY);
        this.user = {};
    }

    /**
     * 根据token获取用户信息
     * @param userToken userToken
     */
    private verifyUserByToken(userToken: string) {

        // TODO
        this.loginStatus = true;
        this.user = {};
    }
}
