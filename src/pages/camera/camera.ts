import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  photoSelected: any = {};

  photos:any[] = [
    {
      name: '1',
      img: 'assets/img/img1.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img2.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img3.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img4.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img5.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img6.jpg'
    }
  ];

  constructor(
    public viewCtrl: ViewController,
    private navCtrl: NavController,
  ) {
    this.photoSelected = this.photos[0];
  }

  close(){
    this.viewCtrl.dismiss();
  }

  changePhoto( photo ){
    this.photoSelected = photo;
  }

  goToFiltersPage(){
    this.navCtrl.push( FiltersPage, {
      photo: this.photoSelected
    });
  }

}
