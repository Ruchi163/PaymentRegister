import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL="http://localhost:5294/api/PaymentDetail"
  formData:PaymentDetail=new PaymentDetail();
  list:PaymentDetail[];

  postPaymentDetails(){
    
   return this.http.post(this.baseURL,this.formData);
  }

  putPaymentDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`,this.formData);
  }

  deletePaymentDetails(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList(){
   return this.http.get(this.baseURL).toPromise().then(res=>this.list=res as PaymentDetail[]);
  }
  
}
