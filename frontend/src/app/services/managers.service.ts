import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

export class Managers{
  id: number;
  name: string;
  surname: string;
  repairedboats: string;
  description: string;
  file = File;
}
const hhtpOptionsUsingFormData ={
  headers: new HttpHeaders({ 'enctype': 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'})
}

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  endpoint = "http://localhost:4000/api/manager";

  constructor(private httpClient: HttpClient) { }

  createManager(Managers: Managers, file:File): Observable<any>{
    let formData = new FormData();
    formData.append("name",Managers.name);
    formData.append("surname", Managers.surname);
    formData.append("repairedboats",Managers.repairedboats);
    formData.append("description",Managers.description);
    formData.append("file", file);
    return this.httpClient.post<Managers>(this.endpoint, formData,hhtpOptionsUsingFormData)
      .pipe(
        catchError(this.handleError<Managers>('Error occured'))
      );
  }
  getManager(id): Observable<Managers[]>{
    return this.httpClient.get<Managers[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log('managers fetched: ${id}')),
      catchError(this.handleError<Managers[]>('Get managers id=${id}'))
    );
  }

  getManagers(): Observable<Managers[]>{
    return this.httpClient.get<Managers[]>(this.endpoint)
    .pipe(
      tap(User => console.log('Managers retrieved!')),
      catchError(this.handleError<Managers[]>('Get Managers', []))
    );
  }

  /* updateManagers(id, Managers: Managers): Observable<any> {
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("name",Managers.name);
    bodyencoded.append("surname", Managers.surname);
    bodyencoded.append("repairedboats",Managers.repairedboats);
    bodyencoded.append("description",Managers.description);
    bodyencoded.append("filename", Managers.filename.toString());
    const body = bodyencoded.toString();
    return this.httpClient.put(this.endpoint + '/' + id, body, this.httpOptions)
    .pipe(
      tap(_ => console.log('managers updated: ${id}')),
      catchError(this.handleError<Managers[]>('Update managers'))
    );
  } */

  deleteManagers(id): Observable<Managers[]>{
    return this.httpClient.delete<Managers[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log('manager deleted: ${id}')),
      catchError(this.handleError<Managers[]>('Delete manager'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
