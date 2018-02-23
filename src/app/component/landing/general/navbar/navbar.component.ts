import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  addClass: boolean = false;

  @Input() logo: any;
  @Input() links: any[] = [];

  @Output() onNavigationClicked =  new EventEmitter();

  @HostListener('window:scroll', [])
  scroll() {
      if(window.pageYOffset > 50) {
        this.addClass = true;
      } else {
        this.addClass = false;
      }
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(link) {
    this.onNavigationClicked.emit(link);
  }

}
