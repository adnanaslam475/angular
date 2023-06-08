import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/reducers/product/product.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {
  @Output() childEmit: EventEmitter<Product> = new EventEmitter();

  emitFunc() {
    this.childEmit.bind({})
  }
}
