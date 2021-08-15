import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseurl = "http://localhost:8000";
  // private localUrl = 'https://jsonplaceholder.typicode.com/photos';

  IsUserLoggedIn: boolean;
  constructor(private http: HttpClient) { }



  signup(cc) {
    return this.http.post(this.baseurl + "/registerUser", cc);
  }
  signin(ld) {
    return this.http.post(this.baseurl + "/login", ld).pipe(map((response: Response) => {
      console.log(response)
      if (response == null) {
        this.IsUserLoggedIn = false;
        console.log(this.IsUserLoggedIn)

      } else {
        this.IsUserLoggedIn = true;
        console.log(this.IsUserLoggedIn)


      }

    }))

  }



  getData() {
    return this.http.get(this.baseurl + "/getPost");
  }
}
