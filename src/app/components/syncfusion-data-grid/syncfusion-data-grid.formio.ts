import { NgZone, EventEmitter, ElementRef, Input } from "@angular/core";
import { Components, CustomTagsService, ExtendedComponentSchema, FormioAlerts, FormioAppConfig, FormioBaseComponent, FormioComponent, FormioForm, FormioOptions, FormioRefreshValue, FormioService } from "@formio/angular";


type ClassWithEditForm<C> = C & { editForm: () => { components: ExtendedComponentSchema[] } };

export class SyncfusionDataGridFormio {

    public myCustomInput = Components.create(Input, {
        label: 'Custom Input',
        placeholder: 'Enter something...',
        
      });
}