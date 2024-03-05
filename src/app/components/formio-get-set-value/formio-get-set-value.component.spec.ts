import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioGetSetValueComponent } from './formio-get-set-value.component';

describe('FormioGetSetValueComponent', () => {
  let component: FormioGetSetValueComponent;
  let fixture: ComponentFixture<FormioGetSetValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormioGetSetValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormioGetSetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
