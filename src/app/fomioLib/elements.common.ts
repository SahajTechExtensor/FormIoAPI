import { ExtendedComponentSchema, BuilderInfo, ValidateOptions } from 'formiojs';
import { NgElement, WithProperties } from '@angular/elements';

// Custom Angular Components
export interface FormioCustomComponentInfo extends BuilderInfo {
  type: string;
  selector: string;

}

// export type FormioCustomElement = NgElement & WithProperties<{ value: any } & ExtendedComponentSchema>;

// export interface FormioEvent {
//   // eventName: string;
//   data?: {
//     [key: string]: any;
//   };
// }

// export interface FormioCustomComponent<T> {
//   value: T; // Should be an @Input
//   valueChange: EventEmitter<T>; // Should be an @Output
//   disabled: boolean;
//   formioEvent?: EventEmitter<FormioEvent>; // Should be an @Output
// }