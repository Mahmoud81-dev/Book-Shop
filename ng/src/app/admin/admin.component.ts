import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

  delete(book:any){
    
    this.todoService.delete(book).subscribe()
    this.router.navigate(['/'])
  }

  update(book:any){
    
    
    this.router.navigate(['edit/'+ book._id])
  }

}
