import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { url } from 'inspector';
import { title } from 'process';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public miToken: number;

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
      title: 'Sign in / Sing up',
      url: '/menu/login'
    },
  ];
  
  
  selectedPath = '';

  constructor(private router: Router) {
    this.miToken = 0;
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    })
   }

  ngOnInit(): void {
    }
  }

