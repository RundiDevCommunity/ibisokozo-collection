import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {AngularFireStorage} from '@angular/fire/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class IbisokozoService {

  constructor(
    private afs : AngularFirestore,
   ) { }



  addIgisokozo(igisokozo:any){
    const igisokozoId = this.afs.createId();
    igisokozo.id=igisokozoId;
    return this.afs.collection('ibisokozo').add(igisokozo);
  }

  getIbisokozoList(){
    return this.afs.collection('ibisokozo').snapshotChanges()
  }
}