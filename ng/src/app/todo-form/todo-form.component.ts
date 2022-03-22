import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() informParent = new EventEmitter<any>()
  task = new FormControl('')
  description = new FormControl('')
  price = new FormControl('')
  image = new FormControl('')

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.todoService.addTodo(this.task.value,this.description.value,this.price.value , this.image.value).subscribe(result => {
      this.informParent.emit(result)
    })
  }



}
