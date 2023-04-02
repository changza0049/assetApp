import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    auth: any;
    constructor(
        private session: SessionService
    ) {
        this.auth = this.session.auth;
        this.Init();
    }
    async Init() {
    }
    GoToWithdrawAdd() {
        this.session.LinkTo("withdraw-add")
    }
    GoToWithdraw() {
        this.session.LinkTo("withdraw")
    }
    // GoTocancel() {
    //     this.session.LinkTo("cancel")
    // }
    GoToProfile() {
        this.session.LinkTo("profile")
    }
}
