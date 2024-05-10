import { Component } from '@angular/core';
import { User } from '../../clases/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import e from 'express';

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
  usuario!: User;
  

  //crear logica para crear cuentas

  crearCuenta(){
    if (this.password.value === this.repeatPassword.value){
      this.usuario  = new User(this.nombre.toString() , this.email.toString(), this.password.toString());
      return true;
    } else {
      return false;
    }
  }
  
}
