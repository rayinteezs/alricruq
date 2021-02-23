import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-list-managers',
  templateUrl: './list-managers.page.html',
  styleUrls: ['./list-managers.page.scss'],
})
export class ListManagersPage implements OnInit {

  Managers: any = []

  constructor(private ManagersService: ManagersService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.ManagersService.getManagers().subscribe((response) =>{
      this.Managers = response;
    })
  }
  removeManager(manager, i){
    if(window.confirm('Are you sure')){
      this.ManagersService.deleteManagers(manager.id)
      .subscribe(()=>{
        this.ionViewDidEnter();
        console.log('Manager deleted!')
      })
    }
  }
}
