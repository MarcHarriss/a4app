import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList:string[];
  todoInput:string;
  isSet:boolean;


  constructor() { }

  ngOnInit() {
    this.todoList = ['You have nothing to-do yet'];
    this.isSet = true;

  }

  addTodo(todo) {
    if(this.isSet) {
      this.todoList.pop();
      this.isSet = !this.isSet;
      this.todoList.push(todo);
      console.log(todo);
      console.log(this.todoList);
      this.todoInput = '';
    } else {
      this.todoList.push(todo);
      console.log(todo);
      console.log(this.todoList);
      this.todoInput = '';
    }
  }

  deleteTodo(i) {
    this.todoList.splice(i, 1);
    if (this.todoList.length === 0) {
      this.todoList.push('You have nothing left to-do!')
    }

  }

}
