import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // companyName= new FormControl("kodlama.io",Validators.required)

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      contactName: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      contactTitle: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      street: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      city: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      region: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      postalCode: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      country: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      phone: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
      customerKey: [
        '', //default deger
        [Validators.required, Validators.minLength(2)], //dogrulama
      ],
    });
  }

  register() {
    if (!this.registerForm.valid) {
      console.warn('Gerekli alanları doldurunuz ');
      return;
    }

    const customer:Customer={
     ...this.registerForm.value,
     city: this.registerForm.value.city.toUpperCase()
    }

    this.customerService
      .add(customer)
      .subscribe((response) => {
        console.info(response);
      });
  }
}
