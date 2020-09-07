import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  expanded = false;

  constructor(
    private service: RestService
  ) {
  }

  ngOnInit() {
    this.service.getHeroes();
  }

  click() {
    this.expanded = !this.expanded;
  }

}
