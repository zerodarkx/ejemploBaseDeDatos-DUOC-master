import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(
    public db: AngularFirestore
  ) { }

  crearDoc(tabla: string, data: any) {
    const collection = this.db.collection(tabla);
    return collection.doc().set(data);
  }

  leerDatos(tabla) {
    const collection = this.db.collection(tabla);
    return collection.valueChanges({ idField: 'id' });
  }

  eliminarDato(tabla: string, id: string) {
    const collection = this.db.collection(tabla);
    return collection.doc(id).delete();
  }

  editarDato(tabla: string, id: string, data: any) {
    const collection = this.db.collection(tabla);
    return collection.doc(id).update(data);
  }

  traerSoloId(tabla: string, id: string) {
    const collection = this.db.collection(tabla);
    return collection.doc(id).valueChanges();
  }

  crearID() {
    return this.db.createId();
  }
}
