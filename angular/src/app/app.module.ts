import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMasterComponent } from './user-master/user-master.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeModule } from 'primeng/tree';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DocumentMasterComponent } from './document-master/document-master.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { Routes,RouterModule } from '@angular/router';
import { RoleMasterComponent } from './role-master/role-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ExamMasterComponent } from './exam-master/exam-master.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: DashboardsComponent },
  // Add more routes for other components if necessary
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    UserComponent,
    UserMasterComponent,
    EmployeeListComponent,
    RegistrationComponent,
    DashboardComponent,
    DocumentMasterComponent,
    DocumentListComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardsComponent,
    StatisticsComponent,
    ChartsComponent,
    TablesComponent,
    RoleMasterComponent,
    LocationMasterComponent,
    ExamMasterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    TreeModule,
    InputTextModule,
    PasswordModule,
    NgxExtendedPdfViewerModule,
    ChartModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
