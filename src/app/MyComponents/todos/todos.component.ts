import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoServices: TasksService) {

  }

  ngOnInit(): void {
    this.todoServices.getTodos().subscribe(todos => {
      console.log('todos', todos)
      this.todos = todos
    });
  }

  deleteTodo(todo: Todo) {
    console.log('todo', todo)
    this.todoServices.deleteTod(todo).subscribe(() => {
      this.todos = this.todos.filter(v => v.sno !== todo.sno)
    }, e => { console.log('errrrrrrr', e) });
  }



  checkedTodo(todo: Todo) {
    this.todoServices.updateTodo(todo).subscribe((t) => {
      // this.todos = this.todos.filter(v => v.sno !== t.sno)
    });
  }

  // addTodo(todo: Todo) {
  //   this.todoServices.addTodo(todo).subscribe(() => {
  //     this.todos.push(todo)
  //   });
  // }


  addTask(todo: Todo) {
    this.todoServices.addTask(todo).subscribe((todo) => this.todos.push(todo));
  }
}
