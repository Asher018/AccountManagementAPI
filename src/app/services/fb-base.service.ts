import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PartyAccount } from '../shared/model/partyaccount.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private firestore: AngularFirestore) { }

  get(collectionName: string): Observable<PartyAccount[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('accountType', 'asc');
      return query;
    }).valueChanges() as Observable<PartyAccount[]>;
  }

  async add(collectionName: string, data: PartyAccount, id?: string): Promise<string> {
    const uid = id ? id : this.firestore.createId();
    data.id = uid;
    await this.firestore.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getif(collectionName: string): Observable<PartyAccount[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('creditLimit',">=", 10000);
      return query;
    }).valueChanges() as Observable<PartyAccount[]>;
  }

  getcustomer(collectionName: string): Observable<PartyAccount[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('creditLimit',">=", 10000) && query.where('accountType','==','customer');
      return query;
    }).valueChanges() as Observable<PartyAccount[]>;
  }

  weakAdd(collectionName: string, data: PartyAccount) {
    return this.firestore.collection(collectionName).add(data);
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.firestore.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: any) {
    return this.firestore.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.firestore.collection(collectionName).doc(id).delete();
  }
}
