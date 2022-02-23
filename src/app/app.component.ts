import { Component, Input } from '@angular/core';
export interface Book { 
  name: string,               //название
  img: string,                //обложка
  author: string,             //автор 
  yearOfPublication: string,  //год выпуска
  numberOfPages: number,      //колличество страниц
  publisher: string,          //издательство
  photoOfTheAuthor: string,   //фото автора
  reviews: number             //рецензии
  price: number               //цена
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWork3';
  public myBook: Book[] = [
    {name: 'Dune',yearOfPublication: '29.05.2020', numberOfPages: 710, publisher: 'ACT',photoOfTheAuthor: 'https://fb.ru/misc/i/gallery/59116/2231727.jpg',reviews: 4.5,img: 'https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/55339991-frenk-gerbert-duna.jpg', author: 'Frank Herbert', price: 750},
    {name: "Moly Blackwater. Beyond World's Edge.",yearOfPublication: '04 april 2016',numberOfPages: 390, publisher: 'Феникс',photoOfTheAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nick_Perumov_01.jpg/200px-Nick_Perumov_01.jpg',reviews: 4.4,img: 'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/17181165-nik-perumov-za-kraem-mira.jpg', author: 'Nick Perumov', price: 670},
    {name: 'The Witcher Saga',yearOfPublication: '22 jule 2014',numberOfPages: 2800,publisher: 'ACT',photoOfTheAuthor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Andrzej_Sapkowski_-_Lucca_Comics_and_Games_2015_2.JPG/200px-Andrzej_Sapkowski_-_Lucca_Comics_and_Games_2015_2.JPG',reviews: 4.6,img: 'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/6375365-andzhey-sapkovskiy-vedmak.jpg', author: 'Andrzej Sapkowski', price: 1560}
  ];

  bookList = true;
  public bookNumber = 0               //индекс хранится тут
  closeList(value:any){               //функция 
    this.bookList = !this.bookList;   //открывает книгу/список книг
    this.bookNumber = value;          //и узнает индекс книги
    return this.bookNumber;
    
  }

  infoButton = true;  
  tapInfoButton() {
    if (this.authorButton == true) {
      this.authorButton = !this.authorButton;
      this.infoButton = !this.infoButton;     //функция кнопки инфо 
    }     
  }

  authorButton = false;
  tapAuthorButton() {
    if (this.infoButton == true) {
      this.infoButton = !this.infoButton;
      this.authorButton = !this.authorButton;     //функция кнопки автор
    }
  }



  // userInfo="";
  // textareaInfo="";
  // enterInf = true;
  
  // userLetter = '';
  // answerToQuestion = '';
  // basket = '';
  // haveAnAnswer: boolean = false;

  // 
  
  // enterInfo() {
  //   this.enterInf = !this.enterInf;         //функция кнопки ввода информации
  // }

  //создадим интерфейс, описывающие элементы export interface Letter
  // letters: Letter[] = [] ;   //массив в котором хранятся сообщения
 
  // iSell: Sell[] = [
  //   {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsesBElLStUbhCEl2wEXNp4Aj35z6hZu80dA&usqp=CAU", price:100, condition:.74},
  //   {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLlqenzHOLxXewhrJhJmubYISsDryd7PwSg&usqp=CAU", price:10, condition:.54},
  //   {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3qpSbFnonGb7iKD8x52E7J3Vw21X_dFe1g&usqp=CAU", price:1000, condition:.2}
  // ]
  
  // pushLetter() {
  //   let cardDate = new Date();                  //переменная с датой
  //   let addObj: {newMassage:string; cardDate:string} = { newMassage: `${this.userLetter}`, cardDate: `${cardDate}` }; //создаем обьект с сообщением и датой
  //   this.letters.push(addObj);                  //добавляем этот обьект в массив 
  //   this.userLetter = '';     
  // }

  // answer(value: any) {
  //   this.basket=value; 
  //   return this.basket;  
  // }
  // outputTheAnswer() {
  //   if (this.basket != '') {
  //     this.haveAnAnswer = true;
  //   }
  //   this.answerToQuestion=this.basket;    
  //     return this.answerToQuestion, this.haveAnAnswer;             
  // } 
}







