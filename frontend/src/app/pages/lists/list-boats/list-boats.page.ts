import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BoatsService } from 'src/app/services/boats.service';

@Component({
  selector: 'app-list-boats',
  templateUrl: './list-boats.page.html',
  styleUrls: ['./list-boats.page.scss'],
})
export class ListBoatsPage implements OnInit {

  public search: string = "";
  Boats: any = []

  constructor(private BoatsService: BoatsService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.BoatsService.getBoats().subscribe((response) =>{
      this.Boats = response;
    })
  }
  
  setSearchInput(event){
    console.log(event.detail.value);
    this.search = event.detail.value;
  }

  getSearchInput(){
    return this.search;
  }

  removeBoat(boat, i){
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
        this.BoatsService.deleteBoats(boat.id)
        .subscribe(()=>{
          this.ionViewDidEnter();
        })
        Swal.fire(
          'Deleted!',
          'Your Boat has been deleted.',
          'success'
        )
      }
    })
  }

}
