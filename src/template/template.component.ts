import {Component} from '@angular/core';
import {ClassOpe} from './interface';

@Component({
    selector: 'app-template',
    templateUrl:'./template.component.html',
    styleUrls: ['./template.component.css']
})
export class Operation {
    titre = "Cahier de Budgetisation";
    budget= [];
    operation : ClassOpe = {
    date: new Date, 
    description:'',
    montant:0,
    categorie:''
    };
    
    afficher() {
        console.log(this.operation);
    }
    add(){
        this.budget.push(Object.assign({},this.operation));
        console.log(this.budget);
    };
    delete(index:number){
        this.budget.splice(index, 1);
    };
}