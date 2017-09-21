import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CompteAjaxService {
private urlApi:string = 'http://localhost:3000/operations';

    constructor (private http:HttpClient) {}
    getAllOperations() {
        return this.http.get(this.urlApi).toPromise();
    }
}