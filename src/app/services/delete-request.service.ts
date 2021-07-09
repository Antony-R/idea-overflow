import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteRequest } from '../models/delete-request';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequestService {

  deleteRequestsCollection: AngularFirestoreCollection<DeleteRequest>;

  constructor(private afs: AngularFirestore) {
    this.deleteRequestsCollection = this.afs.collection('deleteRequest');
   }

   addDeleteRequest(deleteRequest: DeleteRequest){
    this.deleteRequestsCollection.add(deleteRequest);
   }

}
