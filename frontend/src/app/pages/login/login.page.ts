import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  login(form) {
    let user: User = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: null,
      isAdmin: null
    };
    this.authService.login(user).subscribe((res) => {
      if (!res.access_token) {
        this.presentAlert("invalid credentials");
        return;
      }
      localStorage.setItem('userToken', `${res}`)
      this.router.navigate(['/menu/info']).then(() => { window.location.reload(); });
      form.reset();
    }, err => {
      this.presentAlert("Error");
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Could not login. Try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
