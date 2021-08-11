import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { TypeProducts } from './../data.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {
  public product: TypeProducts = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(
    private prodSer: ProductsService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.actRoute.params.subscribe(params => {
      this.prodSer.read(+params.id).subscribe(data => { this.product = data });
    });
  }

  comeback() {
    this.router.navigateByUrl('/prod');
  }

}
