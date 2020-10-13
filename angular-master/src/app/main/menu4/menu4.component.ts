import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {
  public bookTest$: Observable<string[]>;
  public inputData: string;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
  }

  
  getBook(data: string) {
    this.bookTest$ = this.service.getBookList(data);
  }
}
