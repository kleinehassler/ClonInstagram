import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { TimelineService } from '../../providers/timeline-service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  //timeline: FirebaseListObservable<any>;
  
  timeline:any[] = [
    {
      img: 'assets/img/img1.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg',
        location: 'Mi casa'
      }
    },
    {
      img: 'assets/img/img2.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg',
        location: 'Chile'
      }
    }
  ];
  

  constructor(
    public navCtrl: NavController, 
    public timelineService: TimelineService,
    public sheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    //this.timeline = this.timelineService.fullTimeline;
  }

   showOptions(){
    let action = this.sheetCtrl.create({
      title: 'Options post',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    action.present( action );
  }

  createPost(){
    let post = {
      img: 'assets/img/img2.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg',
        location: 'Chile'
      }
    };
    this.timeline.push(post);
    //this.timelineService.createPost( post );
  }

}
