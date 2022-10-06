import { Component } from '@angular/core';
import { FireStoreService } from '../servicios/fire-store.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario;

  constructor(
    public servicioDataBase: FireStoreService
  ) {}

  agregarAlgo(){

    let data = {
      nombre: "Pepito",
      edad: 45
    }

    this.servicioDataBase.crearDoc('usuario', data);

  }

  eliminarAlgo(){
    this.servicioDataBase.eliminarDato('usuario', 'JSJ9tyUd0YNt5gqzTAw6')
  }

  editarAlgo(){
    let data = {
      nombre: "Francisco",
      edad: 53,
      asd: 22
    }

    this.servicioDataBase.editarDato('usuario', 'JS1usfbW17nDD6s0SWQg', data)
  }


  buscarTodo(){
    this.servicioDataBase.leerDatos('usuario')
      .subscribe(
        (datos) => {
          console.log(datos);
          this.usuario = datos;
        }
      )
  }

  buscarUno(){
    this.servicioDataBase.traerSoloId('usuario', 'fnc4RIsTX3llPuIRVtx8')
      .subscribe(
        (datos) => {
          console.log(datos);
          this.usuario = datos;
        }
      )
  }

  eliminarUsuario(id: string){
    this.servicioDataBase.eliminarDato('usuario', id)
  }

}
