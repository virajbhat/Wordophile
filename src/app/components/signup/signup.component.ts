import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;  


  FirstName: String = '';

  constructor(private fb: FormBuilder) {
    this.createForm();  
   }

   createForm() {  
    this.angForm = this.fb.group({  
      ProductName: ['', Validators.required ],  
      ProductDescription: ['', Validators.required ],  
      ProductPrice: ['', Validators.required ]  
    });  
  }

  
  ngOnInit() {

   
  }

}
