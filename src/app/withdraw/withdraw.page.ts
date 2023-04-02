import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.page.html',
    styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
    items: any = [];
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let auth: any = await this.session.GetStorage("auth");
        let res: any = await this.session.Ajax(this.session.api + "/withdraw-get.php", {
            customer_id: auth.customer_id
        });
        this.items = res.data;
    }
    edit(item: any) {
        // this.session.LinkTo("withdraw-edit");
        let param: any = {
            item: JSON.stringify(item)
        };
        this.session.LinkToWithParam("withdraw-edit", param);
    }

}
