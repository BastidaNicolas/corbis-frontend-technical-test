import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/assets/data.json'; 

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data.comments;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }

  getObjectives(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data.objectives;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }

  getPerspectives(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data.perspectives;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }

}
