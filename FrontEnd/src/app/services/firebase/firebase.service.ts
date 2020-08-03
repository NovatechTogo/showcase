import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
    firebase.analytics();
  }

  getAuthentifier() {
    return firebase.auth();
  }

  getFireStoreInstance() {
    return firebase.firestore();
  }

  getFieldValue() {
    return firebase.firestore.FieldValue;
  }

  getStorageRef() {
    return firebase.storage().ref();
  }
}
