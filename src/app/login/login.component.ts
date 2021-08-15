import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  constructor(private q: AppService, private route: Router) { }

  ngOnInit(): void {
  }


  login(ld) {
    this.q.signin(ld.value).subscribe(k => {
      this.route.navigate(['/post-list']);

    })
  }
}
