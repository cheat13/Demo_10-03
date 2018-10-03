import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { field, globalField } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fieldAll: field = new field;
  fieldUsage: field = new field;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.fieldAll.name = 'fieldAll';
    this.fieldUsage.name = 'fieldUsage';
  }

  ionViewDidEnter() {
  }

  presentModal(field: field) {
    const modal = this.modalCtrl.create(ModalPage, { _field: field });
    modal.present();
  }

}
