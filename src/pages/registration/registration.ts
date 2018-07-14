import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Modal, ModalController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
//import {AngularFireAuth} from 'angularfire2/auth';
import { FirebaseuiProvider } from '../../providers/firebaseui';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { PhoneNoRegPage } from '../phone-no-reg/phone-no-reg';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    //private afAuth: AngularFireAuth,
    private viewCtrl:ViewController,
     private modal: ModalController,private fb: Facebook, public uiProvider: FirebaseuiProvider) {
  }
  closeModalWthoutSlctn(){
    this.viewCtrl.dismiss();
  }
  phoneRegModal(){
    const regPopUpPage: Modal = this.modal.create(PhoneNoRegPage);
    regPopUpPage.present();
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage')
      // The start method will wait until the DOM is loaded.
      this.uiProvider.ui.start('#firebaseui-auth-container', this.getUiConfig());
    }
  
    getUiConfig() {
      // FirebaseUI config.
      return {
        config: {
          signInSuccess: (currentUser, credential, redirectUrl) => {
            console.log(currentUser);
            console.log(credential);
            console.log(redirectUrl);
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return false;
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        { 
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
          customParameters: { 
            // Forces account selection even when one account 
            // is available. 
            prompt: 'select_account' 
          } 
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID // not available for Ionic apps
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };
    }
  
  facebookRegModal(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }
  connectWithFB(){
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        console.log(result);
      }).catch((error)=>{
        console.log(error);
      });
    });
  }
}
