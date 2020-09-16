import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { airportlist } from 'data/dummy';
import { menuList } from 'app/card/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public list: Array<Object> = airportlist;
  public menuList = menuList;
  public menuIdx = 0;
  public currentURL: string;

  constructor(
    private service: RestService,
    private router: Router
  ) {
    this.currentURL = this.router.url;
  }

  ngOnInit() {
    // this.service.getHeroes();
    console.log(this.router.url);
    console.log(airportlist.length);
  }

  // 메뉴 변경
  changeMenu(i: number) {
    this.menuIdx = i;
    this.currentURL = this.menuList[i].router;
  }

}
