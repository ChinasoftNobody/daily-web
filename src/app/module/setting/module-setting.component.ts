import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../dashboard/module.service';
import {PluginService} from '../../plugin/plugin.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateModuleComponent} from '../../dashboard/create/create-module.component';
import {AssociatePluginComponent} from './associate/associate-plugin.component';

@Component({
    selector: 'app-module-setting',
    templateUrl: './module-setting.component.html',
    styleUrls: []
})
export class ModuleSettingComponent implements OnInit {
    module: any = {};
    associateModalRef: BsModalRef;

    constructor(private activatedRoute: ActivatedRoute,
                private moduleService: ModuleService,
                private pluginService: PluginService,
                private bsModalService: BsModalService) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(data => {
            this.initModuleInfo(data.id);
        });
    }

    /**
     * initModuleInfo
     * @param id id
     */
    private initModuleInfo(id: string) {
        this.moduleService.queryModuleSettingById(id, value => {
            this.module = value;
        });
    }

    showAssociateModal() {
        this.associateModalRef = this.bsModalService.show(AssociatePluginComponent, {
            initialState: {
                module: this.module
            }
        });
        this.associateModalRef.content.closeBtnName = 'Close';
        this.bsModalService.onHide.subscribe(() => {
            this.initModuleInfo(this.module.id);
        });
    }
}
