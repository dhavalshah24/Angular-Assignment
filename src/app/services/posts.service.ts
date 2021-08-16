import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _url ="https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get<any>(this._url)
  }
}
