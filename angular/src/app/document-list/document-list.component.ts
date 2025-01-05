import { Component, Input, OnInit } from '@angular/core';
import { documents } from '../document';
import { UserService } from '../user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit{
  @Input() userId: any;
  documents : documents[];
  text: string;
  constructor(private userservice : UserService){}

  ngOnInit(): void {
    this.getDocumentsData()
  }

  getDocumentsData(){
    this.userservice.getDocumentList().subscribe(data => {
      console.log(data);
      this.documents = data;
    })
  }
}
