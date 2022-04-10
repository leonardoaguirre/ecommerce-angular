import { Component, OnInit } from '@angular/core';
import { Book } from './model/Books';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookService: BookService
  livros : Book[] = []

  constructor(bookService: BookService) {
    this.bookService = bookService
  }

  ngOnInit(): void {
    // this.bookService.getBook().subscribe(data=>{
    //   this.livros = data
    // })

    this.livros = this.bookService.loadBooks()
  }

}
