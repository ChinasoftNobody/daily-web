import {Component} from '@angular/core';
import {UserService} from '../services/user.service';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent {
    constructor(private userService: UserService) {
    }
    title = this.userService.getTitle();
}
