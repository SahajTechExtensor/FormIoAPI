import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../fomioLib/elements.common';
import { registerCustomFormioComponent } from '../../fomioLib/register-custom-component';
import { SyncfusionDataGridComponent } from './syncfusion-data-grid.component';

//  This is the Form Builder information on how this component should show up within the form builder.
const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'syncgrid',
  selector: 'sync-grid',
  title: 'Sync Grid',
  group: 'syncfusion',
  icon: 'table',
};
//register Custom 
export function registerSyncGridComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, SyncfusionDataGridComponent, injector);
}