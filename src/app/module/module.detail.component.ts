import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../dashboard/module.service';
import {ActivatedRoute} from '@angular/router';
import {RecordService} from './record.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UpdateRecordComponent} from './record/update-record.component';

@Component({
    selector: 'app-module-detail',
    templateUrl: './module-detail.component.html',
    styleUrls: []
})
export class ModuleDetailComponent implements OnInit {
    module: any;
    records: any[];
    bsModalRef: BsModalRef;

    constructor(private moduleService: ModuleService,
                private activatedRout: ActivatedRoute,
                private recordService: RecordService,
                private bsModalService: BsModalService) {
    }

    ngOnInit(): void {
        this.activatedRout.params.subscribe(data => {
            this.moduleService.queryModuleById(data.id).subscribe(value => {
                this.module = JSON.parse(JSON.stringify(value)).body.result;
            }, error1 => {
                console.error(error1);
            });
            this.queryRecord(data.id);

        });
    }

    showCreateRecordModal() {
        this.bsModalRef = this.bsModalService.show(UpdateRecordComponent, {
            initialState: {
                module: this.module,
                record: {}
            }
        });
        this.bsModalService.onHide.subscribe(() => {
            this.queryRecord(this.module.id);
        });
    }

    private queryRecord(id: string) {
        this.recordService.queryRecord(id, value => {
            this.records = value;
        });
    }
}
