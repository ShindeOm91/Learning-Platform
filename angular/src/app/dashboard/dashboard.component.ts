import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() userId: any;
  filename = '';
  docList = [];
  file : any;
  flag = false;
  userfName = '';
  userlName = '';
  //value: string | undefined;
  value!: string;
  text: string;
  public pdfSrc =
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

  public page = 2;
  public pageLabel!: string;
  basicData: any;
  basicOptions: any;

  constructor(private userservice : UserService){}
  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    /* ---------------- */

    const svgArrow = `<svg class='actual-arrow'  width="35px" height="35px" viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg">
  <path d="M196,64V168a4,4,0,0,1-8,0V73.65625L66.82812,194.82812a3.99957,3.99957,0,0,1-5.65625-5.65625L182.34375,68H88a4,4,0,0,1,0-8H192A4.0002,4.0002,0,0,1,196,64Z"/>
</svg>`;

document.querySelectorAll(".svg-arrow").forEach((elem) => {
  const theArrow = null; //createElementFromHTML(svgArrow);

  if (theArrow) { // Check if theArrow is not null
    const arrowElement = theArrow as HTMLElement; // Cast to HTMLElement
    if (elem.classList.contains("white")) {
      arrowElement.classList.add("actual-arrow");
      arrowElement.classList.add("white");
    } else {
      arrowElement.classList.add("actual-arrow");
      arrowElement.classList.add("black");
    }

    elem.append(arrowElement);
  } else {
    console.error("Failed to create the arrow element");
  }
});

function createElementFromHTML(htmlString : any) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
}
  userDetails(data: any){
    //console.log(data);
    this.userfName = data.fname;
    this.userlName = data.lname;
    this.userId = data.id;
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
      },
      error:(response) =>{
        console.log(response)
      }
    })
  }

/* DashBord Code */


}
