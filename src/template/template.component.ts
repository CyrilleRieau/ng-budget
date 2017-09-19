import {Component} from '@angular/core';
import {ClassOpe} from './interface';

@Component({
    selector: 'app-template',
    templateUrl:'./template.component.html'
})
export class Operation {
    titre = "Cahier de Budgetisation";
    operation : ClassOpe = {
    date: new Date, 
    description:'',
    montant:0,
    categorie:''
    };
    
    afficher() {
        console.log(this.operation);
    }
}