import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { title } from 'process';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{
  username = '';
  pages = [];
  selectedPath='';

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath= event.url;
    })
  }

  ngOnInit() {
    if (localStorage.getItem('userToken')) {
      this.pages = [
        {title: 'Info',url: '/menu/info'},
        {title: 'Contact Us',url: '/menu/contact-us'},
        {title: 'User', url: '/menu/login'},
      ];
    } else if(localStorage.getItem('adminToken')) {
      this.pages = [
        {title: 'Info', url: '/menu/info' },
        {title: 'Contact Us', url: '/menu/contact-us'},
        {title: 'Admin', url: '/menu/login'},
        {title: 'Managers', url: '/menu/list-managers'},
      ];
    }else{
      this.pages = [
        {title: 'Info',url: '/menu/info'},
        {title: 'Contact Us',url: '/menu/contact-us'},
      ];
    }
  }
  logout(){
    localStorage.clear();
    Swal.fire('Se ha cerrado su sesión').then(()=>{this.router.navigate(['/menu/login']).then(() => { window.location.reload(); });});
  }
  isLogged(){
    if(localStorage.getItem('userToken') || localStorage.getItem('adminToken')){
      return true
    }else{
      return false
    }
  }
  login(){
    this.router.navigate(['/menu/login']).then(() => { window.location.reload(); });
  }
}

