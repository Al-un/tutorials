import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  username: string;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {

  }

  /**
   * Testing https://ionicframework.com/docs/components/#action-sheets
   */
  testActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select a choice',
      buttons: [
        {
          text: 'Pouet',
          role: 'pouet',
          handler: () => console.log('Pouet!')
        },
        {
          text: 'Plop',
          role: 'plop',
          handler: () => console.log('Plop')
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * https://ionicframework.com/docs/components/#alert
   */
  testAlertBasic(): void {
    let alert = this.alertCtrl.create({
      title: 'This is a basic alert',
      subTitle: 'This is my sub title, aka the body message?',
      buttons: ['OK', 'Cancel']
    });
    alert.present();
  }

  /**
   * https://ionicframework.com/docs/components/#alert-prompt
   */
  testAlertPrompt(): void {
    let prompt = this.alertCtrl.create({
      title: 'Enter your name',
      message: 'Select a name to be called out blabla',
      inputs: [
        {
          name: 'name',
          placeholder: 'your username'
        }
      ],
      buttons: [
        {
          text: 'Reset',
          handler: data => this.username = null
        },
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => this.username = data.name
        }
      ]
    });
    prompt.present();
  }

  /**
   * https://ionicframework.com/docs/components/#alert-confirm
   */
  testAlertConfirm(): void {
    let confirm = this.alertCtrl.create({
      title: 'Name change',
      message: 'Do you want to change your name?',
      buttons: [
        {
          text: 'Nope'
        },
        {
          text: 'Yes, I can',
          handler: () => this.testAlertPrompt()
        }
      ]
    });
    confirm.present();
  }
}
