import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ManagersService.deleteManagers(manager.id)
        .subscribe(()=>{
          this.ionViewDidEnter();
        })
        Swal.fire(
          'Deleted!',
          'Your Manager has been deleted.',
          'success'
        )
      }
    })
  }
}
