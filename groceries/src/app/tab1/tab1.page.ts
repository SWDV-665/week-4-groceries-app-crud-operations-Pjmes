import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Grocery';


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,
    public dataService: GroceriesServiceService, public inputService: InputDialogServiceService)  {}

  loadItems(){
    return this.dataService.getItems();
  }

  async removeItem(item, index){
    const toast = await this.toastCtrl.create({
      message: 'Removing - ' + item.name + '...',
      duration: 3000,
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index){
    const toast = await this.toastCtrl.create({
      message: 'Editing - ' + item.name + '...',
      duration: 3000,
    });
    toast.present();

    this.inputService.showPrompt(item, index);
  }


  addItem() {
    console.log('adding item');
    this.inputService.showPrompt();
  }

}






