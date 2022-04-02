import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Input} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() signedIn$: BehaviorSubject<boolean> | undefined;
}
