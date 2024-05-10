import { Component, inject } from '@angular/core';
import { User } from '../../clases/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
 //crear logica para coger datos del formulario y verificar si existe esa cuenta
  
  protected email = new FormControl('');
  protected password = new FormControl('');
  lista: User[] = User.users;
  //coger lista users de la interfaz
  
  constructor(){

  }
  login(){
    console.log(this.email.value + " " + this.password.value);
    for (let i = 0; i < this.lista.length; i++){
      if (this.lista[i].email === this.email.value && this.password.value === this.lista[i].password){
        // hacer referencia al userLoginOn de Header component
        
      }
    }
   
  }
}
