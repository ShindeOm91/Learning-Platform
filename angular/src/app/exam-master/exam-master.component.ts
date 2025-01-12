import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exam-master',
  templateUrl: './exam-master.component.html',
  styleUrls: ['./exam-master.component.css']
})
export class ExamMasterComponent  implements OnInit{
  questionList: any[] = [];
  isQuestionList = true;
  ngOnInit(): void {
    this.getQuestionList();
  }
  examForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
    this.examForm = this.fb.group({
      question: ['', Validators.required],
      options: this.fb.group({
        option1: ['', Validators.required],
        option2: ['', Validators.required],
        option3: ['', Validators.required],
        option4: ['', Validators.required],
      }),
      correctAnswer: ['', Validators.required], // New field for the correct answer
    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      console.log('Form Submitted:', this.examForm.value);
      const formData = {
        question: this.examForm.value.question,
        options: this.examForm.value.options,
        correctAnswer: this.examForm.value.correctAnswer,
      };
      this.examForm.reset(); 
      this.snackBar.open('Question generated successfully!', 'Close', {
        duration: 3000,
      });
      this.userService.addExamQuestion(formData).subscribe( data => {
        console.log(data);
        
      },
      error => console.log(error));
    } else {
      console.log('Form is invalid');
    }
        this.isQuestionList = true;
        this.getQuestionList();
  }

  getQuestionList() {
    this.userService.getQuestionList().subscribe(
      (data: any[]) => {
        this.questionList = data;
        console.log('questionList : ',this.questionList);
      },
      error => {
        console.error('Error fetching question list:', error);
      }
    );
  }

  addQuestion(flag : any) {
    if(flag == 1){
      this.isQuestionList = false;
    } else {
      this.isQuestionList = true;
    }
  }

    
}

export class DataDto {
  question: string;
  options: {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  };
  correctAnswer: string;

}
