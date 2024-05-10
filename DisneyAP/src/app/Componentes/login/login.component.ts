import { Component, inject } from '@angular/core';
import { User } from '../../clases/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../../servicios/data.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
 //crear logica para coger datos del formulario y verificar si existe esa cuenta
  
  protected em = new FormControl('');
  protected pass = new FormControl('');
  lista: User[] = User.users;
  //coger lista users de la interfaz
  head: DataService = inject (DataService);
  
  
  constructor(){
    
  }
  login(){
    
    for (let i = 0; i < this.lista.length; i++){
      if (this.lista[i].email === this.em.value && this.pass.value === this.lista[i].password){
        this.head.cambiarStatusTrue();
        console.log("INICIADO")
        break;
      }
    }
    if (this.head.statusLogin()){
      console.log("trueLogin")
    } else {
      console.log("Error login")
    }
   
  }
}
