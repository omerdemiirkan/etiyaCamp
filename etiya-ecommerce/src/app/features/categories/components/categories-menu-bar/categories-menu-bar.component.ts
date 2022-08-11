import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ProductsService } from 'src/app/features/products/services/products/products.service';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!: Category[];

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductsService
  ) {}

  items!: MegaMenuItem[];

  ngOnInit() {
    this.getCategories();
   
  }
  configureItems() {
    this.items = this.categories.map((category) => {
      // /categories/1 // Route params
      //categories?category=1 //Query params

      // return {label:category.name,routerLink:["",category.id]}

      return {
        label: category.name,
        
        routerLink: [''],
        queryParams: { categoryId: category.id },
      };
    });
  }

  getCategories() {
    this.categoriesService.getList().subscribe((data) => {
      this.categories = data;
      this.configureItems();
      console.log(this.categories);
    });
  }
}
