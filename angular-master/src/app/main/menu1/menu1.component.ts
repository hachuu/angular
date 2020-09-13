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

  // @ViewChild inputEl 
  @ViewChild("inputEl") inputEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(airportlist.length);
    console.log(this.inputEl);
    // this.test = airportlist[0].code;
    // this.filteredList = airportlist.filter(x=> {
    //   if (x.code.indexOf(this.test) > -1) {
    //     return x;
    //   }
    // });
  }

  keyUp(event:KeyboardEvent) {
    console.log(event);
    // this.test = event;//this.inputEl.nativeElement.value;
    this.filteredList = airportlist.filter(x=> {
      if (x.code.indexOf(this.test) === 0) {
        return x;
      }
    });
    console.log(this.filteredList.length);
  }

  ngOnDestroy() {
  }

}
