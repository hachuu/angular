import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loadAPI: Promise<any>;
  showMenuList = false;

  constructor() {
  }
  // <script src="https://kit.fontawesome.com/fb5c23ba72.js" crossorigin="anonymous"></script>

  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
    });
  }

  public loadScript() {
    const url = 'https://kit.fontawesome.com/fb5c23ba72.js';
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.crossOrigin='anonymous';
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  clickToggleBtn() {
    this.showMenuList = !this.showMenuList;
  }

}
