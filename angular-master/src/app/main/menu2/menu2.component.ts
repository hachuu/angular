import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  public totalCalLinesList = [];
  public currentMonth: string;
  public currentYear: string;
  constructor() { }

  ngOnInit(): void {

    const today = new Date();
    const year = today.getFullYear().toString();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString();
    const date = today.getDate().toString();
    const day = today.getDay();
    console.log('today : ', today);
    console.log('year : ', year);
    console.log('month : ', month);
    console.log('date : ', date);
    console.log('day : ', day);

    this.currentMonth = month;
    this.currentYear = year;

    // const weekDays = [0, 1, 2, 3, 4, 5, 6];

    const strFirstDateMonth = year + '-' + month + '-01';
    console.log(strFirstDateMonth);
    const lastDateMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    console.log('lastDateMonth : ', lastDateMonth);

    const firstDateMonth = new Date(strFirstDateMonth);
    console.log(firstDateMonth);

    const firstLineCnt = 7 - firstDateMonth.getDay();
    const firstDateMonthCnt = firstDateMonth.getDay();
    const lastDateMonthCnt = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay();

    const middleLine = (lastDateMonth - (lastDateMonthCnt + 1 + firstLineCnt)) / 7;
    console.log('중간 달력 라인 개수:', middleLine);

    const totalCalLines: number[] = new Array(middleLine + 2);
    const weekDays: number[] = new Array(7);
    let dateValue = 0;
    for (let lIndex = 0; lIndex < totalCalLines.length; lIndex++) {
      const row = new Array();
      for (let wIndex = 0; wIndex < weekDays.length; wIndex++) {
        // row = [];
        // dateValue = dateValue + 1;
        if ((lIndex === 0 && firstDateMonthCnt > wIndex) || (lIndex === totalCalLines.length - 1 && lastDateMonthCnt < wIndex)) {
          row[wIndex] = '♥';
        } else {
          dateValue = dateValue + 1;
          row[wIndex] = dateValue.toString();
        }
      }
      this.totalCalLinesList[lIndex] = row;
    }
    console.log(this.totalCalLinesList);
  }

}
