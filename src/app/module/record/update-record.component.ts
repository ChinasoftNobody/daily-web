import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {RecordService} from '../record.service';
import {RecordModel} from '../../model/record.model';

@Component({
    selector: 'app-update-record-modal',
    templateUrl: './update-record.component.html'
})
export class UpdateRecordComponent {
    module: any = {};
    record: RecordModel = {};

    constructor(public bsModalRef: BsModalRef,
                private recordService: RecordService) {

    }

    updateRecord() {
        this.recordService.update(this.record, value => {
            this.bsModalRef.hide();
        });
    }
}
