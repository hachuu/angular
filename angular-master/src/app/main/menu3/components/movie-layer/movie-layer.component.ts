import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-layer',
  templateUrl: './movie-layer.component.html',
  styleUrls: ['./movie-layer.component.css']
})
export class MovieLayerComponent implements OnInit {

  @Input() openFlag: boolean;
  @Input() movieInfo;
  constructor() { }

  ngOnInit(): void {
  }

  replaceHtmlTag(text: string) {
    return text.replace(/(<([^>]+)>)/ig, '');
  }

}
