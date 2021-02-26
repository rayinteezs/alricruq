import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-create-managers',
  templateUrl: './create-managers.page.html',
  styleUrls: ['./create-managers.page.scss'],
})
export class CreateManagersPage implements OnInit {

  managerForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private ManagersService: ManagersService
  ) {this.managerForm = this.formBuilder.group({
    name: [''],
    surname: [''],
    repairedboats: [''],
    description: [''],
    file: File
  })
    
   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.managerForm.valid) {
      return false;
    } else {
      this.ManagersService.createManager(this.managerForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.managerForm.reset();
            this.router.navigate(['/menu/list-managers']);
          })
        });
    }
  }

}
