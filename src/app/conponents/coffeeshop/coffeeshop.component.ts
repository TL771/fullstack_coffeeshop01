import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Order} from '../../class/order';
import {Product} from '../../class/product';
@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  form: FormGroup;
  formObj:Order;
  date:Date;
  bill:boolean = true;
  products:Product[] = [
    (new Product(1,"เอสเปรซโซ่")),
    (new Product(2,"คาปูชิโน")),
    (new Product(3,"มอคค่า")),
    (new Product(4,"ชาเย็น")),
    (new Product(5,"ชาเขียว")),
    (new Product(6,"ช็อคโกแลต"))
  ];

  constructor(private fb:FormBuilder) {
    this.formObj = new Order("","","","","",false);
    this.form = fb.group({
      name: ["",[Validators.required]],
      email: ["",[Validators.required,Validators.email]],
      phone: ["",[Validators.required,Validators.pattern('[0-9]{10}')]],
      drink: ["",[Validators.required]],
      tempPreference: ["",[Validators.required]],
      sendText: [false,[Validators.requiredTrue]]
    });
    this.date = new Date();
  }

  ngOnInit(): void {
  }
  PlaceOrder():void{
    alert("สำเร็จแล้วว");
    this.date = new Date();
    this.bill = false;
  }
}
