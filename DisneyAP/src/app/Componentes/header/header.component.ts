import { Component, inject } from '@angular/core';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
})
export class HeaderComponent {
  userLoginOn: DataService = inject (DataService);

  constructor () {}
  
  cerrarSesion(){
    this.userLoginOn.cambiarStatusFalse();

    if (this.userLoginOn.statusLogin()){
      console.log("STATUS ON");
    } else {
      console.log("STATUS OFF");
    }
  }

}


