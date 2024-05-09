import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../common/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
 //crear logica para coger datos del formulario y verificar si existe esa cuenta
  password!: string;
  email!: string;
  //coger lista users de la interfaz

  login(){
    
  }
}
