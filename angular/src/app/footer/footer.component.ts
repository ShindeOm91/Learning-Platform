import { Component, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private userservice : UserService){}
  currentYear: number = new Date().getFullYear();
  isPopupVisible: boolean = false;
  currentTemplate!: TemplateRef<any>;
  about: boolean = false;
  courses: boolean = false;
  contact: boolean = false;
  faq: boolean = false;

  openPopup(template: TemplateRef<any>, flag: any){
    this.currentTemplate = template;
    this.isPopupVisible = true;
    if(flag==1) {
      this.about = true;
      this.courses = false;
      this.contact = false;
      this.faq = false;
    } else if(flag==2) {
      this.about = false;
      this.courses = true;
      this.contact = false;
      this.faq = false;
    } else if(flag==3) {
      this.about = false;
      this.courses = false;
      this.contact = true;
      this.faq = false;
    } else if(flag==4) {
      this.about = false;
      this.courses = false;
      this.contact = false;
      this.faq = true;
  }
}

  closePopup() {
    this.isPopupVisible = false;
  }

  sendMail() {
    this.userservice.mailSend("oshinde91199@gmail.com").subscribe(data =>{
      console.log(data);
    });
  }
}
