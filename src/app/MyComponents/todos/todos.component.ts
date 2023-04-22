import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  constructor() {
    this.todos = [
      //   { sno: 1, title: 'adnan', description: 'aslasamsa', active: false },
      // { sno: 3, title: 'adnan', description: 'aslasamsa', active: false },
      // { sno: 3, title: 'adnan', description: 'aslasamsa', active: false }
    ]
  }

  ngOnInit(): void {

  }

  deleteTodo(todo: Todo) {
    const i = this.todos.indexOf(todo)
    this.todos.splice(i, 1)
  }

  checkedTodo(todo: Todo) {
    const i = this.todos.indexOf(todo)
    const temp: any = [...this.todos]
    temp[i] = { ...this.todos[i], active: !this.todos[i].active }
    console.log('thsis', temp)
    this.todos = temp
  }

  addTodo(todo: Todo) {
    console.log('totto', todo)
    this.todos.push(todo)
  }
}
