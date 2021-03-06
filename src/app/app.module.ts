import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { PhoneNoRegPage } from '../pages/phone-no-reg/phone-no-reg';
import { ListPage } from '../pages/list/list';
import { IonicStorageModule } from '@ionic/storage';
//import { SQLite } from '@ionic-native/sqlite';
import { IntroPage } from '../pages/intro/intro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { storage } from 'firebase/app';
import * as firebase from 'firebase';
import { FirebaseuiProvider } from '../providers/firebaseui';


export const firebaseConfig = {
  apiKey: "AIzaSyA8sh1jmWPf3kQ8NZFraKvvBsPkW9nTLt8",
  authDomain:"project-debs.firebaseapp.com",
  databaseUrl:"https://project-debs.firebaseio.com",
  storageBucket:"project-debs.appspot.com",
  messageSenderId:"480774999857"
}
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    RegistrationPage,
    PhoneNoRegPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    RegistrationPage,
    PhoneNoRegPage
  ],
  providers: [
    StatusBar,
    Firebase, AngularFireModule, SplashScreen, Storage, Facebook, SMS,
    FirebaseuiProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
