import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private alertController: AlertController) { }
  
  usuario ={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    password2:''
  }


  ngOnInit() {
  }
  
  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias',
      subHeader: 'Registro Completado',
      message: 'Muchas gracias por registrarte',
      buttons: ['OK'],
    });

    await alert.present();
  }

    Registrarse(){
      console.log('Registrado!');
      this.MostrarMensaje();
      this.usuario.nombre='';
      this.usuario.email='';
      this.usuario.password='';
      this.usuario.password2='';

  }
}