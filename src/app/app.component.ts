import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFireAuth } from 'angularfire2';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(
    public platform: Platform,
    public fireAuth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.checkSession();
    });
  }

  private checkSession(){
    this.fireAuth.subscribe(session =>{
      this.rootPage = this.getPageInit(session);
    })
  }

  private getPageInit(session):any{
    if (session){
      return TabsPage;
    }
    return LoginPage;
  }
}
