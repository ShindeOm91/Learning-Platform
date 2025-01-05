import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(){
    this.todos = [
      {
      sno : 1,
      title: 'this is title 1',
      desc: 'Description',
      active: true
    },
    {
      sno : 2,
      title: 'this is title 2',
      desc: 'Description',
      active: true
    },
    {
      sno : 3,
      title: 'this is title 3',
      desc: 'Description',
      active: true
    },
    {
      sno : 4,
      title: 'this is title 4',
      desc: 'Description',
      active: true
    },
    ]
  }
  ngOnInit(): void {
    
  }

}
