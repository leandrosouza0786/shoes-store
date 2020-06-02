import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "https://api.jotform.com/user";

  private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  login(username, password): Observable<User> {
    console.log("chegando no service:   ",password)
    const data = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post<User>(`${this.url}/login`, data).pipe(
      tap((e: User) => {
        console.log("login: ", e)
        localStorage.setItem("token", e.token);
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(e);
      })
    );
  }
  
  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem("token");
    if (token && !this.subjLoggedIn$.value) {
      return this.checkTokenValidation();
    }
    return this.subjLoggedIn$.asObservable();
  }

  checkTokenValidation(): Observable<any> {
    return this.http.get<User>(`${this.url}/user`)
  }

  getUser(): Observable<User> {
    return this.subjUser$.asObservable();
  }

  logout() {
    localStorage.removeItem("token");
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }
  
}
