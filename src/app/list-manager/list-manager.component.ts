import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor(private todoListService: TodoListService ) {}



  todoList: TodoItem[] ;
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  removeItem(item) {
    this.todoListService.deleteItem(item);
  }
}
