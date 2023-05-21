import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {
  title: string;
  description: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {

  }
  ngOnInit(): void {

  }
  // ngOnDestroy(): void { }

  onSubmit() {
    const t = { title: this.title, active: false, description: this.description, sno: 8, }
    this.todoAdd.emit(t)
  }
}
