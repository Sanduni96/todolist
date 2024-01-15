import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoscomComponent } from './todoscom/todoscom.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet , TodoscomComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = 'todolist';
}