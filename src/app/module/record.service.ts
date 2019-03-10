import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {daily_server} from '../services/rest.config';
import {RecordModel} from '../model/record.model';

@Injectable({
    providedIn: 'root',
})
export class RecordService {
    constructor(private httpService: HttpService) {
    }

    queryRecord(id: string, success: (value) => void) {
        this.httpService.post(daily_server.path('findByModuleId'), {id: id}, success);
    }

    update(record: RecordModel, success: (value) => void) {
        this.httpService.post(daily_server.path('updateRecord'), record, success);
    }
}
