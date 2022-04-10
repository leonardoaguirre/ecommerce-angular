import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/Books"


@Injectable()
export class BookService {
    private url = "URL"

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'aplication/json' })
    }
    constructor(private http: HttpClient) { }

    getBook() {
        return this.http.get(this.url)
    }

    loadBooks(): Book[] {
        return new Array<Book>(
            { id: "1", name: "Book1", price: 24, quantity: 1, category: "action", img: "img1" },
            { id: "2", name: "Book2", price: 50, quantity: 1, category: "action", img: "img2" },
            { id: "3", name: "Book3", price: 20, quantity: 2, category: "action", img: "img3" },
            { id: "4", name: "Book4", price: 10, quantity: 1, category: "action", img: "img1" },
            { id: "5", name: "Book5", price: 15, quantity: 5, category: "action", img: "img1" }
        )

    }
}