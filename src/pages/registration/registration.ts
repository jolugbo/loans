import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Modal, ModalController } from 'ionic-angular';
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
    private viewCtrl:ViewController, private modal: ModalController) {
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

}
