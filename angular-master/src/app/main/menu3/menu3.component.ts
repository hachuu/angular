import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  public inputDate: string;       // 검색어
  public movieList;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
    // this.service.getMovie();
  }

  async searchMovie() {
    this.movieList = await this.service.getMovie(this.inputDate, '100');
    console.log(this.service.getMovie(this.inputDate, '100'));
  }

}
