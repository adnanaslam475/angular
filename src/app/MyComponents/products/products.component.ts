import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Product } from 'src/app/reducers/product/product.model';
import { getProducts, login } from 'src/app/store/actions/app.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private store: Store<IAppState>, private http: HttpClient) {
  }
  private apiUrl = 'http://localhost:5000/tasks';

  ngOnInit() {
    this.store.dispatch(getProducts());
    console.log(
      'onProductsComponent_INIT',
      this.store.select((store) => store),
      this.store.select(state => {
        console.log('geeeeeeeeeee', state)
        return state
      }).subscribe(s => {
        console.log('{ s }==========>', s)
      })
    )
  }
}
