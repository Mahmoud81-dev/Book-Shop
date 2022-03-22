import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'shoping', component: ShoppingComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
