import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Idea } from '../models/idea';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  ideasCollection: AngularFirestoreCollection<Idea>;
  ideas: Observable<Idea[]>;
  ideaDoc: AngularFirestoreDocument<Idea> | null = null;

  constructor(private afs: AngularFirestore) {
    //this.ideas = this.afs.collection('idea').valueChanges() as Observable<Idea[]>;
    this.ideasCollection = this.afs.collection('idea', ref => ref.orderBy('postedDate','desc'));
    this.ideas = this.ideasCollection.snapshotChanges().pipe(map((changes: any) => {
      return changes.map((a: any) => {
        const data = a.payload.doc.data() as Idea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getIdeas() {
    return this.ideas;
  }

  addIdea(idea: Idea){
    this.ideasCollection.add(idea);
  }

  // updateIdea(idea: Idea){
  //   this.ideaDoc = this.afs.doc('idea/' + idea.id);
  //   this.ideaDoc.update(idea);
  // }

}
