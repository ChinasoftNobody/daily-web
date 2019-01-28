import {Component} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
    selector: 'app-header-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent {
    constructor(private userService: UserService, public bsModalRef: BsModalRef) {
    }

    private loginStatus = false;
    user = {name: '', password: ''};

    login(): void {
        if (this.userService.login(this.user.name, this.user.password)) {
            console.log(0);
            this.loginStatus = true;
            this.bsModalRef.hide();
        } else {
            console.log(-1);
        }
    }
}
