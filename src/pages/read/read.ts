import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
  	this.getUsers();
  }

	getUsers() {
	  this.restapiService.getUsers()
	  .then(data => {
	    this.users = data;
	  });
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadPage');
  }

}
