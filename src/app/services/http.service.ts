import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {USER_TOKEN_KEY} from './const.service';

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
     * post for callback method
     * @param url url
     * @param body body
     * @param success success
     * @param error error
     */
    post(url: string, body: any, success: (value) => void, error?: (error: any) => void) {
        if (!!!error) {
            error = this.error;
        }
        this.postObj(url, body).subscribe(value => {
                const result = JSON.parse(JSON.stringify(value)).body;
                if (result.success) {
                    success(result.result);
                } else {
                    error(result.message);
                }
            },
            error1 => error(error1));
    }

    /**
     * 默认错误处理
     * @param err err
     */
    private error(err: any): void {
        console.error(err);
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
