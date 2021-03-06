import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private storage: Storage) {

  }
  ionViewDidLoad() {
  this.storage.get('intro-done').then(done => {
    if (!done) {
      //this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);
    }
  });
}
}
