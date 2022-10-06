import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from "@angular/forms";

import { FireStoreService } from "../../servicios/fire-store.service";

@Component({
  selector: 'app-paginahija',
  templateUrl: './paginahija.page.html',
  styleUrls: ['./paginahija.page.scss'],
})
export class PaginahijaPage {

  formularioData: FormGroup;

  usuario;

  constructor(
    public fb: FormBuilder,
    public service: FireStoreService
  ) {
    this.formularioData = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
    });

    this.service.leerDatos('formulario').subscribe(
      (usuarios) => {
        this.usuario = usuarios;
      }
    );

   }

   agregarPersona(){
    let persona = this.formularioData.value;
    console.log(persona);

    this.service.crearDoc('formulario', persona);
    
   }

}
