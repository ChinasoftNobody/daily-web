import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {daily_server} from '../services/rest.config';
import {ModuleType} from './create/create-module.component';

@Injectable({
    providedIn: 'root',
})
export class ModuleService {
    constructor(private http: HttpService) {
    }

    queryModules(param: { keyword: string , page: number, size: number}): Observable<HttpResponse<Object>> {
        return this.http.postObj(daily_server.path('moduleFindAll'), param);
    }

    createModule(module: { name: string; type: ModuleType; desc: string }): Observable<HttpResponse<Object>>  {
        return this.http.postObj(daily_server.path('createModule'), module);
    }
}
