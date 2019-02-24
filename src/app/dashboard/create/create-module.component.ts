import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {ModuleService} from '../module.service';

@Component({
    selector: 'app-create-module-modal',
    templateUrl: './create-module.component.html'
})
export class CreateModuleComponent {
    constructor(public bsModalRef: BsModalRef,
                private moduleService: ModuleService) {
    }

    types = [ModuleType.TOOL, ModuleType.VIEW];

    module = {
        name: '',
        desc: '',
        type: ModuleType.TOOL
    };

    createModule() {
        this.moduleService.createModule(this.module).subscribe(value => {
            this.bsModalRef.hide();
        }, error1 => {
            console.error(error1);
        });
    }
}

export enum ModuleType {
    TOOL = 'Tools',
    VIEW = 'View'
}
