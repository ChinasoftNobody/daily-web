import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../dashboard/module.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-module-detail',
    templateUrl: './module-detail.component.html',
    styleUrls: []
})
export class ModuleDetailComponent implements OnInit {
    module: any;

    constructor(private moduleService: ModuleService,
                private activatedRout: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRout.params.subscribe(data => {
            this.moduleService.queryModuleById(data.id).subscribe(value => {
                this.module = JSON.parse(JSON.stringify(value)).body.result;
            }, error1 => {
                console.error(error1);
            });
        });
    }

}
