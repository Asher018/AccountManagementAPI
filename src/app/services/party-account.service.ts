import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PartyAccount } from 'src/app/shared/model/party-account.model';

@Injectable({
  providedIn: 'root'
})
export class PartyAccountService {
  constructor(private firestore: AngularFirestore) {
   }
  
  getPartyAccount() {
    return this.firestore.collection('partyaccount').snapshotChanges();
  }
  createPolicy(partyaccount : PartyAccount){
    return this.firestore.collection('partyaccount').add(partyaccount);
  }
  updatePolicy(partyaccount : PartyAccount){
    delete partyaccount.id;
    this.firestore.doc('partyaccount/' + partyaccount.id).update(partyaccount);
  }
  deletePolicy(partyaccountId: String){
    this.firestore.doc('partyaccount/' + partyaccountId).delete();
  }
  

}
