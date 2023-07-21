import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import {NgForm} from '@angular/forms'
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service.d';


@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit{

      constructor(public service :PaymentDetailService 
       
        ){

      }

      ngOnInit(): void {
       
      }
      onSubmit(form:NgForm){
        if(this.service.formData.paymentDetailId==0){
          this.insertRecord(form);
        }
        else{
          this.updateRecord(form);
        }
      }

      insertRecord(form:NgForm){
        this.service.postPaymentDetails().subscribe(
          res=>{
            this.resetForm(form);
            this.service.refreshList();
          },
          err=>{
            console.log("Error");
          }
        );
      }

      updateRecord(form:NgForm){
        this.service.putPaymentDetails().subscribe(
          res=>{
            this.resetForm(form);
            this.service.refreshList();
          },
          err=>{
            console.log("Error");
          }
          
        )
      }
      resetForm(form:NgForm){
        form.form.reset();
        this.service.formData=new PaymentDetail();
      }
}
