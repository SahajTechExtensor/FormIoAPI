import { Component, Injector, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SyncfusionDataGridComponent } from './components/syncfusion-data-grid/syncfusion-data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { registerSyncGridComponent } from './components/syncfusion-data-grid/syncfusion-data-grid.formio';
import { registerEmpTableComponent } from './components/emp table/register';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'FormIoAPI';

  constructor(injector:Injector){
    registerSyncGridComponent(injector);
    registerEmpTableComponent(injector);
  }

  ngOnInit(): void {
      // // Removing Syncfusion premium dialog after 2 seconds
      setTimeout(() => {
          const els = document.querySelectorAll(
              'div[style*="z-index: 999999999"]'
          );
          els.forEach((e) => {
              e.remove();
          });
      }, 200);
  }
}

