import { TypeProducts } from './../data.type';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
  public products: TypeProducts[] = [];

  constructor(private prodSer: ProductsService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.prodSer.list().subscribe(data => {this.products = data});
  }

  onHandleDelete(id: number) {
    this.prodSer.delete(id).subscribe(data => {
      this.products = this.products.filter(i => i.id !== id);
    })
  }

  onHandleEdit(id: number) {
    console.log(id)
  }
}
