import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, DoCheck, OnInit, inject } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';



@Component({
    selector: 'app-syncfusion-data-grid',
    standalone: true,
    imports: [GridModule],
    templateUrl: './syncfusion-data-grid.component.html',
    styleUrl: './syncfusion-data-grid.component.scss'
})
export class SyncfusionDataGridComponent implements OnInit, AfterViewInit {
    public data: any
    //create htttp Client Obj
    public client: HttpClient = inject(HttpClient);
    public url = 'https://dummyjson.com/products';
    constructor() {
        //    API Call by Get method 
        this.client.get(this.url).subscribe((res: any) => {
            this.data = res.products
            console.log(this.data)
        });
    }
    ngOnInit(): void {
        console.log("DATA")
    }
    ngAfterViewInit(): void {
      // Removing POP Syncfusion dialog after 2 seconds
      setTimeout(() => {
      const els = document.querySelectorAll(
        'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
      );
      els.forEach((e) => {
        e.remove();
      });
    }, 200);
    }

    // The columns variable specifies the column definitions for the grid. 
    // Each column corresponds to a field in the data source.
    public columns: object = [
        { field: 'id', headerText: 'Products', textAlign: 'Right', width: 120 },
        { field: 'title', headerText: 'Title', width: 150 },
        { field: 'price', headerText: 'Price', width: 150 },
        { field: 'brand', headerText: 'Brand', width: 150 },
        { field: 'category', headerText: 'Category', width: 150 }
    ];
    // the rowclick method is triggered, and the selected row’s alert(event data) is passed as an argument $event obj.
    rowClick(event: any): void {
        const selectedRow: any = event.data;
        alert(`Selected Product is ${selectedRow.title}`);
    }
    
}
