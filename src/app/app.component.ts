import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbisokozoService } from './services/ibisokozo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ibisokozoForm: FormGroup;
  isSubmitting = false; // Add this variable

  constructor(
    private ibisokozoService: IbisokozoService,
    private fb: FormBuilder
  ) {
    this.ibisokozoForm = this.fb.group({
      igisokozo: ['', [Validators.required]],
      inyishu: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  addIgisokozo() {
    if (this.ibisokozoForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
  
      const igisokozo = {
        igisokozo: this.ibisokozoForm.value.igisokozo,
        inyishu: this.ibisokozoForm.value.inyishu
      };
      console.log(igisokozo);
      
  
      this.ibisokozoService.addIgisokozo(igisokozo)
        .then(() => {
          this.isSubmitting = false;
  
          // Open the success dialog
        })
        .catch(error => {
          this.isSubmitting = false;
          console.error('Error:', error);
        });
    }
  }
  
}

