import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MuroService {
  private apiUrl = 'http://localhost:3001/api/posts'; // URL del backend

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  //  'x-api-key': environment.apiKeyServices,
  }); 
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get(this.apiUrl);
  }

  createPost(postData: { title: string; content: string }) {
    const senData = {
      title: postData.title,
      content: postData.content
    }
    return this.http.post(this.apiUrl, senData,{headers:this.headers});
}
}
