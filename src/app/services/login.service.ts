import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

//Interfaz Auth
export interface Auth {
  id: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url: string = 'http://localhost:3001'
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! } 
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> { // | boolean

    if( !localStorage.getItem('token') ) {
      return of(false); // falase
    }

    return this.http.get<Auth>(`${ this.url }/api/login`)
               .pipe(
                 map( auth => {
                   this._auth = auth;
                   return true;
                 })// como la funcion retorna un observable<boolean> y el return es de tipo <Auth>, entonces con el map transformamos lo quea que se reciba y retorna un nuevo valor
               );

  }

  login() {
    return this.http.get<Auth>(`${ this.url }/api/login`)
                .pipe(
                  tap( auth => this._auth = auth ),
                  tap( auth => localStorage.setItem('token', auth.id) )
                );
  }

}
