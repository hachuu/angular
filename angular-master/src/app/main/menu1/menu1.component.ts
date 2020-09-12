import { Component, OnInit, OnDestroy } from '@angular/core';
import { airportlist } from '../../../data/dummy';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit, OnDestroy {

  public list: Array<Object> = airportlist;
  public test;
  constructor() { }

  ngOnInit(): void {
    console.log(airportlist.length);
    this.test = airportlist[0].code;
    airportlist.map(x=>{
      console.log(x.code);
    });
  }

  ngOnDestroy() {
  }

}
