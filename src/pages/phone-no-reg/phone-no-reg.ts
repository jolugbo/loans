import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Firebase } from '@ionic-native/firebase';
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
  phoneNo = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController, private sms: SMS,private firebase: Firebase) {
  }
  closeModalWthoutSlctn() {
    this.viewCtrl.dismiss();
  }
  sendSMS() {
    this.sms.send('+234'+this.phoneNo, 'Thank you for registering with us!');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  backToIntro() {
    this.viewCtrl.dismiss();
  }

}
