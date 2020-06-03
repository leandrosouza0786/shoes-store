import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "https://reqres.in/api";

  private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  login(username, password): Observable<User> {
    let credent = {
      "email": username,
      "password": password
    }
    return this.http.post<User>(`${this.url}/login`, credent).pipe(
      tap((e: User) => {
        console.log("login: ", e)
        if (e['token']) {
          localStorage.setItem("token", e['token'])
          this.subjLoggedIn$.next(true);
          this.subjUser$.next(e);
        }
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem("token");
    if (token || this.subjLoggedIn$.value) {
      return of(true)
    }
    this.logout()
    return this.subjLoggedIn$.asObservable();
  }


  logout() {
    localStorage.removeItem("token");
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }

}
