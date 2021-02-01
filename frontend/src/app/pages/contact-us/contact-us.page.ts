import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ask } from 'src/app/classes/ask';
import { AskService } from 'src/app/services/ask.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public Ask: Ask
  constructor(private AskService: AskService, private router: Router) {
    this.Ask = new Ask();
  }

  ngOnInit() {
  }
  public submit(): void{
    this.AskService.ask(this.Ask).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.Ask.name)
        localStorage.setItem('personalToken2',`${data}`);
        Swal.fire('Su pregunta se ha enviado correctamente').then(()=>{window.location.reload();});
      },
      (error: Error) => {
        console.error("Error al realizar la pregunta")
      }
    )
  }
}
