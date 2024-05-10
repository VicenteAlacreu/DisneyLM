import { Component } from '@angular/core';
import { User } from '../../clases/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { createReadStream } from 'fs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
   nombre = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  repeatPassword = new FormControl('');
  usuario: User = new User(this.nombre.toString(),this.email.toString(), this.password.toString());
  cuentaCreada: number = -1;
  
  //crear logica para crear cuentas

  crearCuenta(){
    if (this.password.toString() === this.repeatPassword.toString() && this.email.toString() != null && this.nombre.toString() != null){
      this.usuario = new User(this.nombre.toString() , this.email.toString(), this.password.toString());
      if (User.users.push(this.usuario)){
        console.log("Usuario anyadido");
        this.cuentaCreada = 0;
      } else {
        console.log("Error al anyadir");
        this.cuentaCreada = 1;
      }
     
    }
    
  } 
  
}
