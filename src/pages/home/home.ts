import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //public nome_usuario:string = prompt('Qual seu nome ?')
  constructor(public navCtrl: NavController) {

  }

}
