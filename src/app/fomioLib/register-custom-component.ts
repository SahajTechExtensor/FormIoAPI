import { Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';
import { FormioCustomComponentInfo } from './elements.common';
import { createCustomFormioComponent } from './create-custom-component';
import { CustomTagsService } from './custom-tags.service';
import { Component } from 'formiojs/types/components/_classes/component/component';

export function registerCustomTag(tag: string, injector: Injector): void {
  injector.get(CustomTagsService).addCustomTag(tag);
}
export function registerCustomFormioComponent(
  options: FormioCustomComponentInfo,
  angularComponent: Type<any>,
  injector: Injector,
): void {
  registerCustomTag(options.selector, injector);

  const complexCustomComponent = createCustomElement(angularComponent, { injector });
  customElements.define(options.selector, complexCustomComponent);
  
  Components.setComponent(options.type, createCustomFormioComponent(options));
}

