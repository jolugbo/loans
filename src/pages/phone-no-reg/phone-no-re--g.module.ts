import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneNoRegPage } from './phone-no-reg';

@NgModule({
  declarations: [
    PhoneNoRegPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneNoRegPage),
  ],
})
export class PhoneNoRegPageModule {}
