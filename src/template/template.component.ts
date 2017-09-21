import {Component} from '@angular/core';
import {ClassOpe} from './interface';
import { CompteService } from '../app/shared/compte/compte.service';
import {CompteAjaxService} from '../app/shared/compte-ajax.service';

@Component({
    selector: 'app-template',
    templateUrl:'./template.component.html',
    styleUrls: ['./template.component.css'],

})
export class Operation {
    compte:number=2500;
    titre = "Cahier de Budgetisation";
    operations = [];
    operation : ClassOpe = {
    date: new Date, 
    description:'',
    montant:0,
    categorie:''
    };
    comptecourant:number = 2500;
    displayCount() {
        console.log(this.compte);
    }
    creditCount(){
       this.compteService.creditCount();
       this.compteService.getCount();
    };
    debtCount(){
        this.compteService.debtCount(); 
        this.compteService.getCount();
    }
    addOperation(){
       this.compteService.addOperation(this.operation).then((newOpe)=> this.operations.push(newOpe));
    };
    deleteOperation(index:number){
        this.compteService.deleteOperation(index);
    };
    constructor
    (private compteService:CompteService,
    private compteAjaxService:CompteAjaxService) { };
      
    ngOnInit() {
        this.compteAjaxService.getAllOperations().then((todos) => this.operations = <Object[]>todos);
        this.compte = this.compteService.getCount();
        }
}