export class User {
    static users: User[] = [];
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
        let a = this.users.length;
        console.log(a);
        this.users.forEach(e => {
            console.log(e);
        });
    }
    
    
}

