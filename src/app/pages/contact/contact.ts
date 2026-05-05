import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import emailjs from '@emailjs/browser'; // NEU
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  form: FormGroup;
  success = false;
  isSending = false; // NEU
  error = false; // NEU

  // NEU: EmailJS Daten
  private serviceId = 'service_wz7u69q';
  private templateId = 'template_21i8ys8';
  private publicKey = 'qfKVp5YTYJ_y8EWQr';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      pp: [false, Validators.requiredTrue],
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }

  // GEÄNDERT: sendet jetzt echte Mail über EmailJS
  submit(): void {
    if (this.form.invalid || this.isSending) {
      this.form.markAllAsTouched();
      return;
    }

    this.sendEmail();
  }

  // NEU
  private sendEmail(): void {
    this.isSending = true;
    this.success = false;
    this.error = false;

    emailjs.send(this.serviceId, this.templateId, {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message
    }, this.publicKey)
      .then(() => this.handleSuccess())
      .catch(() => this.handleError());
  }

  // NEU
  private handleSuccess(): void {
    this.success = true;
    this.error = false;
    this.isSending = false;
    this.form.reset({ name: '', email: '', message: '', pp: false });

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

  // NEU
  // NEU
  private handleError(): void {
    this.error = true;
    this.success = false;
    this.isSending = false;
  }
}