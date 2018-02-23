import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  navBarData; any;
  constructor(private router: Router) {
    this.navBarData = {
      logo: {
        label: '',
        path: '/home/profile'
      },
      links: [
        {
          label: 'Assignment',
          path: '/home/branches'
        }
      ]
    }
  }

  ngOnInit() {
  }

  navigate(link) {
      this.router.navigate([link.path]);
  }


}
