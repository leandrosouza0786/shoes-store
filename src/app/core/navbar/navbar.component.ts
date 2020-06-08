import { AuthService } from './../services/auth.service';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CartShopService } from '../services/cart-shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  stateLogin: boolean = false;
  userInfo: string;
  alreadyLogin: boolean;

  loaded: boolean = true
  maxCartState: any;
  private subscription: Subscription;

  constructor(private eRef: ElementRef, private loginService: AuthService, private cartShop: CartShopService) { }

  ngOnInit(): void {
    this.loginService.isAuthenticated()
      .subscribe(e => {
        this.alreadyLogin = e
      })

    this.subscription = this.cartShop.CartState
      .subscribe((state: any) => {
        this.maxCartState = state.products.length
      });
  }

  showLoginToggle() {
    this.stateLogin = !this.stateLogin;
  }

  @HostListener('document:click', ['$event'])
  clickout(event?) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.stateLogin = false;
    }
  }

  stateUser(data) {
    console.log("data", data)
    if (data) {
      this.alreadyLogin = true
      this.stateLogin = false;
    }
  }

  deslogar() {
    this.loginService.logout();
    this.alreadyLogin = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
