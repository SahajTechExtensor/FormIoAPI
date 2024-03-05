import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../fomioLib/elements.common';
import { registerCustomFormioComponent } from '../../fomioLib/register-custom-component';
import { EmpTab } from './emp-tab.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'emptab',
  selector: 'emp-tab',
  title: 'Emp Tab',
  group: '_custom',
  icon: 'list',
};

export function registerEmpTableComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, EmpTab , injector);
}
