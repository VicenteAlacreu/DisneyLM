import { Component } from '@angular/core';
import { User } from '../../common/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements User{
  nombre!: String;
  email!: String;
  password!: String;
  //crear logica para crear cuentas

  crearCuenta(){
    
  }
  
}
