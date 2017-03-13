import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimelineService } from '../../providers/timeline-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html'
})
export class FiltersPage {

  photo: any = {};
  filterSelected: any = {};
  filters: any[] = [
    {
      name: 'Normal',
      class: 'none'
    },
    {
      name: 'Sepia',
      class: 'sepia'
    },
    {
      name: 'Sature',
      class: 'sature'
    },
    {
      name: 'Hue-rotate',
      class: 'hue-rotate'
    },
    {
      name: 'Grayscale',
      class: 'grayscale'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public timelineService: TimelineService
  ) {}

  ionViewDidLoad() {
    this.photo = this.navParams.get('photo');
  }

  changeFilter( filter ){
    this.filterSelected = filter;
  }

  savePhoto(){
    let post = {
      img: this.photo.img,
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg',
        location: 'Chile'
      }
    };
    //this.
    //this.timelineService.createPost( post );
    this.navCtrl.setRoot( TabsPage );
  }

}
