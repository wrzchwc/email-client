import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Email} from "../interfaces/email";
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  emailForm!: FormGroup;

  constructor() {

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

}
