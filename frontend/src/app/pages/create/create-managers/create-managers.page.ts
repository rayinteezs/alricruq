import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Managers, ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-create-managers',
  templateUrl: './create-managers.page.html',
  styleUrls: ['./create-managers.page.scss'],
})
export class CreateManagersPage implements OnInit {

  managerForm: FormGroup;

  submitted = false;

  private file : File;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private ManagersService: ManagersService
  ){}

  ngOnInit() {
    this.managerForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      repairedboats: [''],
      description: [''],
      file: [null]
    })
  }
  fileChange(fileChangeEvent){
    this.file = fileChangeEvent.target.files[0];
}

  onSubmit(){
    this.submitted = true;
    if (!this.managerForm.valid){
      console.log('Rellene los campos obligatorios')
      return false;
    }else{
      const manager:Managers = this.managerForm.value;
      this.ManagersService.createManager(manager,this.file).subscribe(()=>{
        this.managerForm.reset;
        this.router.navigateByUrl("menu/list-managers");
      });
    }
    console.log(this.managerForm.value)
  }

}
