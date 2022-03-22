import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  serverUrl = 'http://localhost/'

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(this.serverUrl + 'todos')  
  }

  addTodo(task: string,description:string, price:string, image:string): Observable<any> {
    return this.http.get(this.serverUrl + 'addTodo?task=' + task +'&description=' +   description
    
    +'&price='+price+ '&image=' + image)
  }
  
  update(name:any,image:any,desc:any,price:any, id:any): Observable<any> {

    return this.http.get(this.serverUrl + 'update?task=' + name +'&description=' +   desc
    
    +'&price='+ price + '&image=' + image + '&id=' + id )
  }

  addTocart(book:any): Observable<any> {
    return this.http.get(this.serverUrl + 'addTocart?task=' + book.task +'&description=' +   book.description
    
    +'&price='+ book.price+ '&image=' + book.image)
  }

  getcart(): Observable<any> {
    return this.http.get(this.serverUrl + 'carts')  
  }


  delete(todo: any): Observable<any> {
    return this.http.get(this.serverUrl + 'delete/'+todo._id)
  }

  deletecart(todo: any): Observable<any> {
    console.log(todo);
    return this.http.get(this.serverUrl + 'deletecart/'+todo)
   
    
  }


  
}
