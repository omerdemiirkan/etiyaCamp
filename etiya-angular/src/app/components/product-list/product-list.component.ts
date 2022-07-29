import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // productList:any[]=[]
  productList!: any[];


  isProduct:boolean = false;

cartItems: any[] =[];
 
  constructor(private productsService:ProductsService) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts()
    }, 2000);
   
  }
  getProducts(){
    this.productsService.getList().subscribe((response) =>{
      this.productList = response;  
      if(this.productList.length>0) this.isProduct = true;
    })
  }

  addToCart(product:Product){
    let itemToFind = this.cartItems.find((c)=> c == product.name);
    if (!itemToFind) {
      this.cartItems.push(product.name)
    }
    else{
      console.log("Ürün zaten ekli!!")
    }
  }
  
}
