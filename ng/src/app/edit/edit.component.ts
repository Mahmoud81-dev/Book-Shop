import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  task = new FormControl('')
  description = new FormControl('')
  price = new FormControl('')
  image = new FormControl('')
  informParent: any;
  id:any

  constructor(private todoService: TodoService, private router: Router ,private route: ActivatedRoute ) { 

     this.id= this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  update() {
    this.todoService.update(this.task.value, this.image.value ,this.description.value,this.price.value , this.id).subscribe()
    this.router.navigate(['/'])
  }
}
