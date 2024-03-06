// @ts-nocheck
import { BuilderInfo, Components, ExtendedComponentSchema, Utils as FormioUtils } from 'formiojs';
import { FormioCustomComponentInfo, FormioCustomElement, FormioEvent } from '../elements.common';

//  to create your own custom form components. 
//  The process of creating a custom component involves extending a Base class
//  of the component that is "closest" to the implementation you desire, and then override methods 
//  or introduce new methods that will implement your custom logic. 
const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;

export function createCustomFormioComponent(customComponentOptions: FormioCustomComponentInfo) {
  return class CustomComponent extends BaseInputComponent {
    static editForm = customComponentOptions.editForm || TextfieldComponent.editForm;
    id = FormioUtils.getRandomComponentId();
    type = customComponentOptions.type;
    _customAngularElement: FormioCustomElement;

        /**
     * This is the default schema of your custom component. It will "derive"
     * from the base class "schema" and extend it with its default JSON schema
     * properties. The most important are "type" which will be your component
     * type when defining new components.
     *
     * @param extend - This allows classes deriving from this component to 
     *                 override the schema of the overridden class.
     */
    static schema() {
      return BaseInputComponent.schema({
        ...customComponentOptions.schema,
        type: customComponentOptions.type,
      });
    }




        /**
     * This is the Form Builder information on how this component should show
     * up within the form builder. The "title" is the label that will be given
     * to the button to drag-and-drop on the buidler. The "icon" is the font awesome
     * icon that will show next to it, the "group" is the component group where
     * this component will show up, and the weight is the position within that
     * group where it will be shown. The "schema" field is used as the default
     * JSON schema of the component when it is dragged onto the form.
     */

    static get builderInfo(): BuilderInfo {
      return {
        title: customComponentOptions.title,
        group: customComponentOptions.group,
        icon: customComponentOptions.icon,
        weight: customComponentOptions.weight,
        documentation: customComponentOptions.documentation,
        schema: CustomComponent.schema(),
      };
    }

    elementInfo() {
      const info = super.elementInfo();
      info.type = customComponentOptions.selector;
      info.changeEvent =  'valueChange';
      info.attr = {
        ...info.attr,
        class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
      };
      return info;
    }

    get inputInfo() {
      const info = {
        id: this.key,
        ...this.elementInfo()
      }
      return info;
    }

    renderElement(value: any, index: number) {
      const info = this.inputInfo;
      return this.renderTemplate( 'input', {
        input: info,
        value,
        index
      });
    }

    // override render(children: any, topLevel?: boolean | undefined) {
      
    //   return this.renderElement();
    // }
    getValue() {
      return super.getValue();;
    }

    setValue(value, flags = {}) { 
      return super.setValue(value, flags);
    }

  };
}
