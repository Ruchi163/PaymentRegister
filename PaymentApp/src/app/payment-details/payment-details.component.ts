import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
      constructor(public service:PaymentDetailService){
      }

      ngOnInit(): void {
        this.service.refreshList();
      }
      
      populateForm(selectedRecord:PaymentDetail){
        this.service.formData=Object.assign({},selectedRecord);
      }
      deleteForm(id:number){
        let ans=window.confirm("Are you sure you want to delete it");
        if(ans==true){
          this.service.deletePaymentDetails(id).subscribe(
            res=>{
             
              this.service.refreshList();
            },
            err=>{
              console.log("Error");
            }
            
          )
      }
    }
     

}
