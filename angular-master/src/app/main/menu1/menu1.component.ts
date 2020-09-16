import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { airportlist } from '../../../data/dummy';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit, OnDestroy {

  public list: Array<Object> = airportlist;
  public test;
  public filteredList;
  public expanded = false;

  // @ViewChild inputEl 
  @ViewChild("inputEl") inputEl: ElementRef;
  

  constructor() { }

  ngOnInit(): void {
    console.log(airportlist.length);
    console.log(this.inputEl);
  }

  keyUp(event:KeyboardEvent) {
    const inputValue = this.inputEl.nativeElement.value;
    if (!!inputValue) {
      this.filteredList = airportlist.filter(x=> {
        if (x.code.indexOf(this.test) > 0 || (/^[a-zA-Z]*$/.test(inputValue) && x.code.toLowerCase().indexOf(this.test.toLowerCase()) === 0)) {
          return x;
        }
      });
    } else {
      this.filteredList = [];
    }
    console.log(this.filteredList.length);
  }

  // 메뉴 펼치기/닫기
  btnExpandedclick() {
    this.expanded = !this.expanded;
  }

  ngOnDestroy() {
  }

}
