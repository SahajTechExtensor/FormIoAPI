// @ts-nocheck
import { BuilderInfo, Components, ExtendedComponentSchema, Utils as FormioUtils } from 'formiojs';
import { FormioCustomComponentInfo, FormioCustomElement, FormioEvent } from '../elements.common';


const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;

export function createCustomFormioComponent(customComponentOptions: FormioCustomComponentInfo) {
  return class CustomComponent extends BaseInputComponent {
    static editForm = customComponentOptions.editForm || TextfieldComponent.editForm;
    id = FormioUtils.getRandomComponentId();
    type = customComponentOptions.type;
    _customAngularElement: FormioCustomElement;

    static schema() {
      return BaseInputComponent.schema({
        ...customComponentOptions.schema,
        type: customComponentOptions.type,
      });
    }

    get defaultSchema() {
      return CustomComponent.schema();
    }

    get emptyValue() {
      return customComponentOptions.emptyValue || null;
    }

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

    constructor(public component: ExtendedComponentSchema, options: any, data: any) {
      super(component, {
        ...options,
        sanitizeConfig: {
          addTags: [customComponentOptions.selector],
        },
      }, data);

      if (customComponentOptions.extraValidators) {
        this.validators = this.validators.concat(customComponentOptions.extraValidators);
      }
    }

    elementInfo() {
      const info = super.elementInfo();
      info.type = customComponentOptions.selector;
      info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
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
      return this.renderTemplate(customComponentOptions.template || 'input', {
        input: info,
        value,
        index
      });
    }


  };
}
