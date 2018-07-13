import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
//import { Firebase } from '@ionic-native/firebase';
import * as Firebase  from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
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
  verificationId:any;
  code: string = "";
  phoneNo = '';
  visibility = "hidden";
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private afAuth: AngularFireAuth,
    private viewCtrl: ViewController, private sms: SMS) {
  }
  closeModalWthoutSlctn() {
    this.viewCtrl.dismiss();
  }
  sendSMS() {
    this.visibility = "visible";
    //this.sms.send('+234'+this.phoneNo, 'Thank you for registering with us!');
  }
  phoneRegAction(){
    (<any>window).FirebasePlugin.verifyPhoneNumber('+234'+this.phoneNo,60,(credential)=>{
      alert("SMS Sent Successfully");
      console.log(credential);
      this.verificationId = credential.verificationId;
    },function(error){
      console.log(error);
    })
    //this.afAuth.auth.signInWithPhoneNumber('')
  }
  verifyCode() {
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId,this.code);
    firebase.auth().signInWithCredential(signInCredential).then((info)=>{
      console.log(info);
    }),(error)=>{
      console.log(error);
    };
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  backToIntro() {
    this.viewCtrl.dismiss();
  }

}
