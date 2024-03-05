import { Routes } from '@angular/router';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { SyncfusionDataGridComponent } from './components/syncfusion-data-grid/syncfusion-data-grid.component';
import { FormioGetSetValueComponent } from './components/formio-get-set-value/formio-get-set-value.component';

export const routes: Routes = [
    {path:'FromBuilder', component:FormBuilderComponent},
    {path:'FromRenderer', component:FormRendererComponent},
    {path:'syncfusion', component:SyncfusionDataGridComponent},
    {path:'GetSetValue', component:FormioGetSetValueComponent}

];
