import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  query = '';

  photosCopy: any = [];
  photos:any[] = [
    {
      img: 'assets/img/img1.jpg',
      text: 'cochabamba',
    },
    {
      img: 'assets/img/img2.jpg',
      text: 'bogota',
    },
    {
      img: 'assets/img/img3.jpg',
      text: 'bogota',
    },
    {
      img: 'assets/img/img4.jpg',
      text: 'cali',
    },
    {
      img: 'assets/img/img5.jpg',
      text: 'madrid',
    },
    {
      img: 'assets/img/img6.jpg',
      text: 'buenos aires',
    },
    {
      img: 'assets/img/img7.jpg',
      text: 'santiago',
    },
    {
      img: 'assets/img/img8.jpg',
      text: 'lima',
    },
    {
      img: 'assets/img/img9.jpg',
      text: 'lima',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.photosCopy = this.photos;
  }

  onInput( event ){
    this.photos = this.photosCopy;

    let val = event.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.photos = this.photos.filter((photo) => {
        return (photo.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
