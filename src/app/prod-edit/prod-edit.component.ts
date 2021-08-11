import { ProductsService } from '../products.service';
import { TypeProducts } from './../data.type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.scss']
})
export class ProdEditComponent implements OnInit {
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

  onUpdate() {
    this.actRoute.params.subscribe(params => {
      this.prodSer.update(+params.id, this.product).subscribe(data => {
        this.router.navigateByUrl('/prod');
      });
    });
  }
}
