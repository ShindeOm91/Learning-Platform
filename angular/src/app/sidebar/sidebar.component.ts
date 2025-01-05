import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private appComponent : AppComponent){
    
   }
  openPage(flag : any) {
    if(flag==1) {
      this.appComponent.todopage(6);
    } else if(flag==2) {
      this.appComponent.todopage(1);
    }
  }
}
