import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {daily_server} from '../services/rest.config';

@Injectable({
    providedIn: 'root',
})
export class ModuleService {
    constructor(private http: HttpService) {
    }

    queryModules(param: { keyword: string , page: number, size: number}): Observable<HttpResponse<Object>> {
        return this.http.postObj(daily_server.path('moduleFindAll'), param);
    }
}
