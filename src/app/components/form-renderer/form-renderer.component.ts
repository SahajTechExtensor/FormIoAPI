import { AfterRenderPhase, AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Formio, FormioForm, FormioModule } from '@formio/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form-renderer',
  standalone: true,
  imports: [CommonModule, FormioModule, FormsModule],
  templateUrl: './form-renderer.component.html',
  styleUrl: './form-renderer.component.scss'
})
export class FormRendererComponent implements OnInit {
  public formTemplates!: FormioForm[];
  public selectedTemplate!: any;
  public submitedTemplate!: {};
  public isTemplateSelected: boolean = false;
  public isDataSubmited: boolean = false;
  FormSubmitJson?: string;

  ngOnInit(): void {
    let existingData = localStorage.getItem('FormsJson');
    if (existingData !== null) {
      this.formTemplates = JSON.parse(existingData);
    }

  }

  renderTemplate(event: any) {
    if (event.target.value == -1) {
      this.isTemplateSelected = false;
    }
    else {
      this.isTemplateSelected = true;
      this.isDataSubmited = false;
      this.selectedTemplate = this.formTemplates[event.target.value];
      Formio.createForm(
        document.getElementById('formio'),
        this.selectedTemplate,
        {
          sanitize: true,
          sanitizeConfig: {
            allowedTags: ['sync-grid', 'emp-tab'],
            addTags: ['sync-grid', 'emp-tab']
          }
        }
      );
    }
  }

  onSubmit(submission: any) {
    // Handle the form submission data
    console.log('Form submitted with data:', submission.data);
    this.FormSubmitJson = JSON.stringify(submission.data, null, 4);
  }
}




















// ControlService: ComponentControlsService = inject(ComponentControlsService)
// FormTitileControls: any
// ngOnInit(): void {
//   this.ControlService.PutControls.subscribe(res=>{
//     this.FormTitileControls=res;
//     console.log(this.FormTitileControls);
//   });
// }

///////////////////////////////////////////////////////////////////////

//  ngOnInit() {
//     this.ControlService.PutControls.subscribe(res => {
//       this.FormTitileControls = res;

//       console.log(this.FormTitileControls)
//     });
//   }
