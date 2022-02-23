import { Component, Input } from "@angular/core";
import {Book} from '../app.component';

@Component({
    selector: 'app-massage',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.css']
})
 
export class CardComponent{ 
    @Input() 'bookNumber':number;
    @Input() 'myBook': Book;
     
}