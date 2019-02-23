import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
    selector: 'app-create-module-modal',
    templateUrl: './create-module.component.html'
})
export class CreateModuleComponent {
    constructor(public bsModalRef: BsModalRef) {
    }

    createModule() {
        // TODO createModule
        // console.log(1);
    }
}
