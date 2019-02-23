import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {daily_server} from '../services/rest.config';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LibraryService {


    constructor(private httpService: HttpService) {
    }

    /**
     * 查询数据
     * @param keyword keyword
     * @param topNum topNum
     */
    queryBooks(keyword: string, topNum: number): Observable<HttpResponse<Object>>  {
        return this.httpService.postObj(daily_server.path('queryLocalBooks'), {
            keyword: keyword,
            page: 0,
            size: 10
        });
    }
}
