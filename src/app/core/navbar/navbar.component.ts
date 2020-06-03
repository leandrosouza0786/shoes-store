import { AuthService } from './../services/auth.service';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  stateLogin: boolean = false;
  userInfo : string;
  alreadyLogin : boolean;

  constructor(private eRef: ElementRef, private loginService: AuthService) { }

  ngOnInit(): void {
    this.loginService.isAuthenticated()
    .subscribe(e => {
      this.alreadyLogin = e
    })
  }

  showLoginToggle(){
    this.stateLogin = !this.stateLogin;
  }

  @HostListener('document:click', ['$event'])
  clickout(event?) {
   if(!this.eRef.nativeElement.contains(event.target)){
     this.stateLogin = false;
   }
  }

  stateUser(data){
    console.log("data",data)
    if(data){
      this.alreadyLogin = true
      this.stateLogin = false;
      // this.userInfo = data.content.username
    }
  }

  deslogar(){
    this.loginService.logout();
    this.alreadyLogin = false;
  }
}
