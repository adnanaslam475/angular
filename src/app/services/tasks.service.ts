import { Injectable } from '@angular/core';
import { Observable, throwError, EmptyError, catchError } from 'rxjs';
import { Todo } from '../Todo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTod(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.sno}`;
    console.log('ssonso', todo.sno)
    return this.http.delete<Todo>(url, httpOptions)
    // .pipe(
    //   catchError(this.handleError('deleteHero'))
    // );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.sno}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  addTask(todo: Todo): Observable<Todo> {
    console.log(';todo--------', todo)
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }
}
