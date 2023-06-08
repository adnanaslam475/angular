import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Product } from '../../reducers/product/product.model';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/reducers/app.state';

import { Observable } from 'rxjs';
import { ADD_PRODUCT } from 'src/app/reducers/product.reducers';
import { IAppState } from 'src/app/store/app.interface';
// import { take, isEmpty, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  products: Observable<Product[]>;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChecked: EventEmitter<Todo> = new EventEmitter();

  constructor(private store: Store<IAppState>) {
    // this.products = this.store.select((state) => state.product);
    // this.products
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('onClickedddd', this.products);
    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: <Todo>{
        active: false,
        description: 'aaaaaaaaaaaaa',
        title: 'adnananaslam',
      },
    });
  }

  onCheckboxClick(todo: Todo) {
    this.todoChecked.emit(todo);
    // console.log('onCheckboxClick')
  }

  ngOnInit(): void {
    console.log('ngOnInit--------');
  }
}
