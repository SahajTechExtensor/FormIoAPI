import { Component, ElementRef, NgModule, OnInit, ViewChild, inject } from '@angular/core';
import { FormioForm, FormioModule } from '@formio/angular';
import { FormFieldsTab } from '../../customFields/form-fields-tab';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [FormioModule, FormsModule ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
  providers:[]
})
export class FormBuilderComponent  {
  public form!: FormioForm;
  public builderOption!: {};

  constructor() {
    this.form = {
      title: '',
      components: []
    };

    this.builderOption = FormFieldsTab
  }

  onChange(event:any): void {
    // if(event.type === 'updateComponent' && event.component.type === "syncgrid")
    // {
    //   document
    //   .querySelectorAll(
    //     'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
    //   )
    //   .forEach((e) => {
    //     e.remove();
    //   });

    //   document
    //   .querySelectorAll(
    //     'div[style*="z-index: 999999999"]'
    //   )
    //   .forEach((e) => {
    //     e.remove();
    //   });
    // }
  }

  onSaveForm() {
    let existingData = localStorage.getItem('FormsJson');

    if (existingData === null) {
      localStorage.setItem('FormsJson', JSON.stringify([this.form]));
    }

    else {
      let formsJson = JSON.parse(existingData);
      let alradyExistForm: boolean = false;
      let alradyExistFormIndex: number = -1;

      formsJson.forEach((form: FormioForm, index: number) => {
        if (form.title === this.form.title) {
          alradyExistForm = true;
          alradyExistFormIndex = index;
        }
      });

      if (alradyExistForm) {
        formsJson[alradyExistFormIndex] = this.form;
      }
      else {
        formsJson.push(this.form);
      }
      localStorage.setItem('FormsJson', JSON.stringify(formsJson));
    }

  }
}
