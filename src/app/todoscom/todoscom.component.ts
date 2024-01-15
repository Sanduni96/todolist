import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../class/todo';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-todoscom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoscom.component.html',
  styleUrl: './todoscom.component.css'
})
export class TodoscomComponent {
todoValue: String = '';

todoList: Todo[] = [
  {
    content: "Todo 1",
    value: false
  },
  {
    content: "Todo 2",
    value: false
  },
  {
    content: "Todo 3",
    value: false
  }
];
finishedList: Todo[] = [

]
constructor(){}

addTodo(){
this.todoList.push({content:this.todoValue, value:false});
this.todoValue ='';
}
changeTodo(i: number){
const item = this.todoList.splice(i,1);
console.log(item);
this.finishedList.push(item[0]);
}
changeFinished(i: number){
  const item = this.finishedList.splice(i,1);
  this.todoList.push(item[0]);
  }
removeTodo(i: number){
  this.todoList.splice(i, 1);
}
}