import { Component, Input } from '@angular/core';
import {Book} from '../app.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  @Input() 'book': Book;
  @Input() 'index': number;
  
}
