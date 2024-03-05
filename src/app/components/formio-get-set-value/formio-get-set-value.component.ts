import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-formio-get-set-value',
  standalone: true,
  imports: [],
  templateUrl: './formio-get-set-value.component.html',
  styleUrl: './formio-get-set-value.component.scss'
})
export class FormioGetSetValueComponent implements OnInit {
  public getDataformio:any
  public setDataformio:any
  ngOnInit(): void {
    Formio.createForm(document.getElementById('formio'), 'https://vopxbjfifjgomcz.form.io/ccparequest').then((form) => {
      let getdata = form.getComponent('brand').getValue();
      this.setDataformio = getdata
    });
  }

}
