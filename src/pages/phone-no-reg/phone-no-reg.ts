import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the PhoneNoRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-no-reg',
  templateUrl: 'phone-no-reg.html',
})
export class PhoneNoRegPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl:ViewController) {
  }
  closeModalWthoutSlctn(){
    this.viewCtrl.dismiss();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


}
