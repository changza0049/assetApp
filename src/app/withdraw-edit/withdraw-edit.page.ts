import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-withdraw-edit',
    templateUrl: './withdraw-edit.page.html',
    styleUrls: ['./withdraw-edit.page.scss'],
})
export class WithdrawEditPage implements OnInit {
    item: any = {};
    widthdraw_date = "";
    widthdraw_time = "";
    product_id = "";
    amount = "";
    data: any = [];
    constructor(
        private session: SessionService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.Loadproduct();

        // ดึงข้อมูล item ที่ส่งมาผ่าน URL
        this.route.queryParams.subscribe(async (params: any) => {
            if (params && params.item) {
                this.item = JSON.parse(params.item);
                let arr = this.item.widthdraw_date.split(" ");
                let widthdraw_date = arr[0];
                let widthdraw_time = arr[1];
                this.widthdraw_date = widthdraw_date;
                this.widthdraw_time = widthdraw_time;
                this.product_id = this.item.product_id;
                this.amount = this.item.amount;
            }
        });

    }
    async Edit() {
        let auth: any = await this.session.GetStorage("auth");
        let rs: any = await this.session.Ajax(this.session.api + "/withdraw-edit.php", {
            widthdraw_id: this.item.widthdraw_id,
            customer_id: auth.customer_id,
            widthdraw_date: this.widthdraw_date,
            widthdraw_time: this.widthdraw_time,
            product_id: this.product_id,
            amount: this.amount
        });
        if (rs.status == "ok") {
            await this.session.ShowAlert("แก้ไขสินค้าเรียบร้อยแล้ว");
            this.session.LinkTo("home");
        } else {
            await this.session.ShowAlert("ไม่สามารถแก้ไขสินค้าได้")
        }

    }
    async Loadproduct() {
        let rs: any = await this.session.Ajax(this.session.api + "/product-get.php", {});
        this.data = rs.data;
    }
}
