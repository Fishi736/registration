import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  constructor(private q: AppService, private route: Router) { }

  ngOnInit(): void {
  }


  login(ld) {
    this.q.signin(ld.value).subscribe(response => {
      this.msg = response;
      sessionStorage.setItem("userData", JSON.stringify(this.msg.token));
      this.route.navigate(['/post-list']);

    })
  }

}
