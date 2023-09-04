import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el módulo Router


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {} // Inyecta el servicio Router

  continuar() {
    // Agrega aquí la lógica para continuar con la opción seleccionada
    console.log('Redirigiendo');
    this.router.navigate(['iniciar']);
  }
}
