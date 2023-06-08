import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    console.log(
      'onProductsComponent_INIT',
      this.store.select((store) => store),
      this.store.select(state => {
        console.log('geeeeeeeeeee', state)
        return state
      }).subscribe(s => console.log('{ s }==========>', s))
    )
  }
}
