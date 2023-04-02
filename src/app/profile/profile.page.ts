import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    auth: any = {};
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        this.auth = await this.session.GetStorage("auth");
    }
    async Logout() {
        let st = await this.session.ShowConfirm("คุณต้องการออกจากระบบใช่หรือไม่ ?")
        if (st == true) {
            this.session.RemoveStorage("auth");
            this.session.LinkTo("login");
        }
    }
}
