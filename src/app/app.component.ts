import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoscomComponent } from './todoscom/todoscom.component';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet , TodoscomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'todolist';
}
