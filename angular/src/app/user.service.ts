import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserLogin } from './registration/registration.component';
import { documents } from './document';
import { Role } from './role-master/role-master.component';
import { Locations } from './location-master/location-master.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:9090/api/";

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }

  createUsers(user : User): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `addUser`, user);
  }

  addRole(role : Role): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `addRole`, role);
  }

  getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(`${this.baseUrl}roles`);
  }

  deleteUser(id : number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}` + `deleteUser/${id}`)
  }

  deleteRole(id : number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}` + `deleteRole/${id}`)
  }

  editRole(id : number): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}` + `editRole/${id}`)
  }

  addLocation(location : Locations): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `addLocation`, location);
  }

  getLocations(): Observable<Locations[]>{
    return this.http.get<Locations[]>(`${this.baseUrl}locations`);
  }

  deleteLocation(id : number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}` + `deleteLocation/${id}`)
  }

  editLocation(id : number): Observable<Locations> {
    return this.http.get<Locations>(`${this.baseUrl}` + `editLocation/${id}`)
  }
  
  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }

  createUser(userlogin : UserLogin): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `createUser`, userlogin);
  }

  loginUser(username: string, password: string): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `loginUser`,{username: username,password: password,},
     /*  { responseType: 'text' } */
    );
  }

  uploadFile(file: string,userId: string): Observable<Object> {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);
    return this.http.post(`${this.baseUrl}` + `uploadFile`,formData);
  }

  getDocumentList(): Observable<documents[]>{
    return this.http.get<documents[]>(`${this.baseUrl}`+`getDocuments`)
  }

  /* mailSend(mailTo: string): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `mail/send-email`,{mailTo:mailTo},
    );
  } */

  mailSend(mailId : String): Observable<String> {
    return this.http.get<String>(`${this.baseUrl}` + `mail/send-email/${mailId}`)
  }

  addExamQuestion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}exam/addExamQuestion`, data);
  }

  getQuestionList(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}exam/getQuestionList`);
  }

getTreeNodesData() {
  return [
      {
          key: '0',
          label: 'Documents',
          data: 'Documents Folder',
          icon: 'pi pi-fw pi-inbox',
          children: [
              {
                  key: '0-0',
                  label: 'Work',
                  data: 'Work Folder',
                  icon: 'pi pi-fw pi-cog',
                  children: [
                      { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                      { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                  ]
              },
              {
                  key: '0-1',
                  label: 'Home',
                  data: 'Home Folder',
                  icon: 'pi pi-fw pi-home',
                  children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
              }
          ]
      },
      {
          key: '1',
          label: 'Events',
          data: 'Events Folder',
          icon: 'pi pi-fw pi-calendar',
          children: [
              { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
              { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
              { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
          ]
      },
      {
          key: '2',
          label: 'Movies',
          data: 'Movies Folder',
          icon: 'pi pi-fw pi-star-fill',
          children: [
              {
                  key: '2-0',
                  icon: 'pi pi-fw pi-star-fill',
                  label: 'Al Pacino',
                  data: 'Pacino Movies',
                  children: [
                      { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                      { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                  ]
              },
              {
                  key: '2-1',
                  label: 'Robert De Niro',
                  icon: 'pi pi-fw pi-star-fill',
                  data: 'De Niro Movies',
                  children: [
                      { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                      { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                  ]
              }
          ]
      }
  ];
}

}
