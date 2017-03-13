import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { ActivityPage } from '../activity/activity';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = TimelinePage;
  tab2Root: any = SearchPage;
  tab4Root: any = ActivityPage;
  tab5Root: any = ProfilePage;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  showCamera(){
    let modal = this.modalCtrl.create( CameraPage );
    modal.present();
  }

}