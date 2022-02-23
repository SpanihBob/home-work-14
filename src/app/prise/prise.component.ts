import { Component, Input } from '@angular/core';
import {Book} from '../app.component';
@Component({
  selector: 'app-prise',
  templateUrl: './prise.component.html',
  styleUrls: ['./prise.component.css']
})
export class PriseComponent {
  @Input() 'bookNumber':number;
  @Input() 'myBook': Book;

}
