import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {

  }

  login() {
    this.service.doLogin();
  }

}
