import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categorys: Category[];
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(value => this.categorys = value);
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(
      value => {},
      error => {},
      () => {
        this.router.navigateByUrl('/');
      }
    );
  }
}
