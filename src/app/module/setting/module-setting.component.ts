import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../dashboard/module.service';

@Component({
    selector: 'app-module-setting',
    templateUrl: './module-setting.component.html',
    styleUrls: []
})
export class ModuleSettingComponent implements OnInit {
    module: any;

    constructor(private activatedRoute: ActivatedRoute,
                private moduleService: ModuleService) {
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
}
