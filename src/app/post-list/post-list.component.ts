import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Data: any = [];
  public searchText = '';

  constructor(private q: AppService, private route: Router) { }

  ngOnInit(): void {
    this.q.getData().subscribe(res => {
      this.Data = res;
      console.log(this.Data)
    })
  }


  LogOut(): void {
    window.sessionStorage.clear();
  }
}
