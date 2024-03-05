import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'emp-tab',
    templateUrl:'./emp-tab.component.html',
    standalone:true,
    imports:[NgFor]
})
export class EmpTab {
    public data: any
    public client: HttpClient = inject(HttpClient);
    public url = 'https://dummyjson.com/products';
    constructor() {
        //    this.data = dataSource;
        this.client.get(this.url).subscribe((res: any) => {
            this.data = res.products
            console.log(this.data)
        });
    }

    // @Input()
    // value!: number;
  
    // @Output()
    // valueChange = new EventEmitter<number>();
  
    // @Input()
    // disabled!: boolean;
}