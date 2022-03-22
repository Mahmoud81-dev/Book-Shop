import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  todos!:Observable<any>
  constructor(private todoService:TodoService, private router: Router) { 
    this.todos = this.todoService.getcart()
  }

  ngOnInit(): void {
  }

  delete(todo:any){
    this.todoService.deletecart(todo).subscribe()
    console.log(todo);
    
    this.router.navigate(['/'])
  }

}
