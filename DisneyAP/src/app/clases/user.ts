export class User {
    static users: any[] = [];
    constructor(public nombre: string, public email: string, public password: string){

    }
    public static  anyadirALista(newUsuario : User){
        let hecho: boolean = false;
       
        if ( this.users.push(newUsuario)){
            hecho = true;
        } else {
            hecho = false;
        }
        return hecho;
    }
    public static verLista(){
        for (let i = 0; this.users.length < 5; i++){
            console.log(this.users[i].toString());
        }
    }
    
    public static crearCuenta(nombre: string, email: string, password: string, repeatPassword: string){
    if (password === repeatPassword){
      let usuario  = new User(nombre , email, password);
      
      if (User.anyadirALista(usuario)){
        console.log("Usuario anyadido");
      } else {
        console.log("Error al anyadir");
      }
    }
}
    
    
    
}

