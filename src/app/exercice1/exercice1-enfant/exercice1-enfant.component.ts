import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent {

  @Input() compteur: number;
  @Output() updaterCompteur = new EventEmitter();

  constructor() { }

  actionSurCompteur(action: string){
    if(action == "moins"){
      this.updaterCompteur.emit("-");
    }else if(action == "plus"){
      this.updaterCompteur.emit("+");
    }
  }

}
