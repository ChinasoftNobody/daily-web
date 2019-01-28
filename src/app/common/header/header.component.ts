import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from '../../services/user.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    constructor(private userService: UserService, private modalService: BsModalService) {
    }

    modalRef: BsModalRef;

    loginModal(): void {
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.modalRef = this.modalService.show(LoginComponent, {initialState});
        this.modalRef.content.closeBtnName = 'Close';
    }


}
