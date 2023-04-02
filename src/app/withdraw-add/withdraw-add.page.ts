import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-withdraw-add',
    templateUrl: './withdraw-add.page.html',
    styleUrls: ['./withdraw-add.page.scss'],
})
export class WithdrawAddPage implements OnInit {
    widthdraw_date = "";
    widthdraw_time = "";
    product_id = "";
    amount = "";
    data: any = [];
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
        this.Loadproduct();
    }
    async withdraw() {
        let auth: any = await this.session.GetStorage("auth");
        let rs: any = await this.session.Ajax(this.session.api + "/withdraw-add.php", {
            customer_id: auth.customer_id,
            widthdraw_date: this.widthdraw_date,
            widthdraw_time: this.widthdraw_time,
            product_id: this.product_id,
            amount: this.amount
        });
        if (rs.status == "ok") {
            await this.session.ShowAlert("เบิกสินค้าเรียบร้อยแล้ว")
        } else {
            await this.session.ShowAlert("ไม่สามารถเบิกสินค้าได้")
        }

    }
    async Loadproduct() {
        let rs: any = await this.session.Ajax(this.session.api + "/product-get.php", {});
        this.data = rs.data;
    }
}
