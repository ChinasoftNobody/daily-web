import {Component} from '@angular/core';
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
        this.modalRef = this.modalService.show(LoginComponent);
        this.modalRef.content.closeBtnName = 'Close';
    }

    logout(): void {
        this.userService.logout();
    }


}
