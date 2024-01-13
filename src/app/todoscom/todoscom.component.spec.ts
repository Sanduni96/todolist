import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoscomComponent } from './todoscom.component';

describe('TodoscomComponent', () => {
  let component: TodoscomComponent;
  let fixture: ComponentFixture<TodoscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoscomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
