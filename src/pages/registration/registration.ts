import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Modal, ModalController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import {AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private afAuth: AngularFireAuth,private viewCtrl:ViewController,
     private modal: ModalController,private fb: Facebook) {
  }
  closeModalWthoutSlctn(){
    this.viewCtrl.dismiss();
  }
  phoneRegModal(){
    const regPopUpPage: Modal = this.modal.create('PhoneNoRegPage');
    regPopUpPage.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  facebookRegModal(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }

}
