import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList:string[];
  todoInput:string;


  constructor() { }

  ngOnInit() {
    this.todoList = ['You have nothing to-do yet'];

  }

  addTodo(todo) {
    this.todoList.push(todo);
    console.log(todo);
    console.log(this.todoList);
    this.todoInput = '';
  }

  deleteTodo(i) {
    this.todoList.splice(i, 1);
  }

}
