import { Injectable } from '@angular/core';
import { ClassOpe } from '../../../template/interface';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CompteService {

private urlApi:string = 'http://localhost:3000/operations';

    constructor (private http:HttpClient) {}
comptecourant:number = 2500;
operation : ClassOpe = {
  date: new Date, 
  description:'',
  montant:0,
  categorie:''
  };
  operations = [];
creditCount(){
    this.comptecourant = this.comptecourant + this.operation.montant;
    console.log(this.comptecourant);
};
debtCount(){
    this.comptecourant = this.comptecourant - this.operation.montant;
    //console.log(this.comptecourant);
}
addOperation(operation){
    return this.http.post(this.urlApi, operation).toPromise();
    //console.log(this.operations);
};
deleteOperation(index:number){
    return this.operations.splice(index, 1);
    };
getCount(){
  return this.comptecourant;
}
}
