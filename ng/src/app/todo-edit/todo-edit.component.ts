import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  task!: FormControl;
  index!: number;
  todo!: any;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.todoService
      .getTodos()
      .subscribe(todos => {
        this.todo = todos.find((_todo: any) => _todo._id === id)
        this.task = new FormControl(this.todo.task);
      })
  }

  ngOnInit(): void {
  }

  save() {
    /*this.todo.task = this.task.value
    this.todoService.updateTodo(this.todo)
      .subscribe(val =>  this.router.navigate(['']))
  }*/
 }

}
