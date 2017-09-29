import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
import { WritePage } from '../write/write';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  readPage = ReadPage;
  writePage = WritePage;
  
  constructor(public navCtrl: NavController) {

  }

}
