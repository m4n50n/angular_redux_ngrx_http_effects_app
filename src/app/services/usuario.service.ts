import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  // https://reqres.in/
  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
      .pipe(
        map((resp: any) => resp["data"])
      );
  }

  getUser(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map((resp: any) => resp["data"])
      );
  }
}
