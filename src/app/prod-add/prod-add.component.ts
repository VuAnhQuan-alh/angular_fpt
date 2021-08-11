import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';
import { TypeProducts, TypeCategories } from './../data.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.scss']
})
export class ProdAddComponent implements OnInit {
 public product: TypeProducts = {
    id: 0,
    title: '',
    price: null,
    description: '',
    category: '',
    image: ''
  };
  public categories: TypeCategories[] = [];
  public cateSelect = 1;
  constructor(
    private prodSer: ProductsService,
    private cateSer: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory () {
    this.cateSer.list().subscribe(data => { this.categories = data });
  };
  onAdd() {
    this.prodSer.create(this.product).subscribe(() => {
      this.router.navigateByUrl('/prod');
    });
  }

}
