import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private q: AppService,) { }

  ngOnInit(): void {
  }

  send(cc) {
    console.log(cc.value)
    this.q.signup(cc.value).subscribe(k => {
     
    });
  }
}
