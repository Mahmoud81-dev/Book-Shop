import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Observable<any>

  constructor(private todoService: TodoService,private router:Router) {
    this.getData()
  }

  ngOnInit(): void {
  }

  toggle(todo: Todo) {
    
  }

  getData() {
    this.todos = this.todoService.getTodos()
  }

  reload(val: any) {
    this.getData()
  }

  add_cart(book:any){
    
    this.todoService.addTocart(book).subscribe()
    this.router.navigate(['shoping'])
  }

 
}
