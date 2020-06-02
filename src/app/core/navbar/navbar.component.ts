import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  stateLogin: boolean = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
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
}
