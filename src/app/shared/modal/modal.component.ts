import {Component, OnInit} from '@angular/core';
import {OnDestroy} from "@angular/core";
import {ElementRef} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {Output} from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }
}
