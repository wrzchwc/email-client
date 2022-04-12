import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Email} from "../interfaces/email";
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  @Output() emailSubmit;
  emailForm!: FormGroup;

  constructor() {
    this.emailSubmit = new EventEmitter();
  }

  ngOnInit(): void {
    const {subject, from, to, text} = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text)
    })
  }

  onSubmit() {
    if (this.emailForm.invalid) return;
    this.emailSubmit.emit(this.emailForm.value);
  }

}
