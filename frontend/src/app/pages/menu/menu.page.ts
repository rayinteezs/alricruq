import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Info',
      url: '/menu/info'
    },
    {
      title: 'Contact Us',
      url: '/menu/contact-us'
    },
    {
      title: 'Sign in / Sign up',
      url: '/menu/login'
    },
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}
