import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ModuleService} from './module.service';
import {CreateModuleComponent} from './create/create-module.component';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent implements OnInit {
    constructor(private moduleService: ModuleService,
                private modalService: BsModalService) {
    }

    modules = [];
    queryParam = {keyword: '', page: 0, size: 10};

    bsModalRef: BsModalRef;

    /**
     * 查询模块
     */
    queryModules() {
        this.moduleService.queryModules(this.queryParam).subscribe(value => {
            this.modules = JSON.parse(JSON.stringify(value)).body.result.content;
        }, error1 => {
            console.error(error1);
        });
    }

    showCreateModuleModal() {
        this.bsModalRef = this.modalService.show(CreateModuleComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    ngOnInit(): void {
        this.queryModules();
    }
}
