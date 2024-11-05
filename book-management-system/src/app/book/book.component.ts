import { Component } from '@angular/core';
import { book } from '../models/book.model';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ngOnInit(): void{
    let savedbook = localStorage.getItem("books");
    this.books = savedbook ? JSON.parse(savedbook) : []
    console.log("got loaded")
  }

  newbookTitle :string = ""
  newbookAuthor : string = ""
  books : book [] =[]
  addBook(){
    if(this.newbookTitle.trim().length && this.newbookAuthor){
      let newbook : book = {
        id : Date.now(),
        title: this.newbookTitle,
        author : this.newbookAuthor
      }
      this.books.push(newbook);
    }
    this.newbookTitle = "";
    this.newbookAuthor = "";
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  deletebook(indx  : number){
    this.books.splice(indx, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
