import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.css'],
})
export class GeneratorFormComponent {
  generatedUrl: string = '';
  urlForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.urlForm = this.fb.group({
      initialUrl: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      //email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.urlForm.value);
    this.generatedUrl = this.generateUrl(this.urlForm.value.initialUrl);
  }

  generateUrl(initialUrl : string) {
    let url: string = "url/" + initialUrl;
    console.log(url);
    return url;
  }

}
