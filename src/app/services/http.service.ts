import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {USER_TOKEN_KEY} from './const.service';
import {daily_server} from './rest.config';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient, private cookie: CookieService) {
    }

    /**
     * post
     * @param url prefix
     * @param body body
     */
    postObj(url: string, body: any): Observable<HttpResponse<Object>> {
        return this.http.post(url, body, this.options());
    }

    /**
     * post
     * @param url prefix
     * @param body body
     */
    post<T>(url: string, body: any): Observable<HttpResponse<T>> {
        return this.http.post<T>(url, body, this.options());
    }

    private options(): ({
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }) {
        return {
            headers: {tokenKey: this.cookie.get(USER_TOKEN_KEY)},
            observe: 'response',
            reportProgress: true,
            responseType: 'json',
            withCredentials: true
        };
    }
}
