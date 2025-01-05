import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-document-master',
  templateUrl: './document-master.component.html',
  styleUrls: ['./document-master.component.css']
})
export class DocumentMasterComponent  implements OnInit{

  @Input() userId: any;
  filename = '';
  docList = [];
  file : any;
  flag = false;
  userfName = '';
  userlName = '';
  //value: string | undefined;
  value!: string;
  public pdfSrc =
  'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
  constructor(private userservice : UserService){}

  ngOnInit(): void {
    
  }

  onChangeFileField(event: any){
    console.log(event.target.files[0]);
    this.docList = event.target.files[0];
    this.filename = event.target.files[0].name;
    this.file = event.target.files[0];
    this.flag = true;
  }
  uploadFile(){
    this.userservice.uploadFile(this.file,this.userId).subscribe({
      next:(response) =>{
        console.log(response);
        window.location.reload();
      },
      error:(response) =>{
        console.log(response)
      }
    })
  }

}
