import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { TranslatePipe } from '../../core/i18n/translate.pipe'; // Pfad ggf. anpassen

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe], // ← TranslatePipe hinzufügen
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  form!: FormGroup;  // nur deklarieren

  constructor(private fb: FormBuilder) {
    // hier initialisieren
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      pp: [false, Validators.requiredTrue],
    });
  }

  submit() {
    if (this.form.invalid) return;
    alert('Thanks! I will get back to you.');
    this.form.reset({ pp: false });
  }
}
