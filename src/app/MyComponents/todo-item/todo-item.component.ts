import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChecked: EventEmitter<Todo> = new EventEmitter();
  /**
   *
   */
  constructor() {

  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('onClick')
  }

  onCheckboxClick(todo: Todo) {
    this.todoChecked.emit(todo);
    console.log('onCheckboxClick')
  }

  ngOnInit(): void {

  }

}
