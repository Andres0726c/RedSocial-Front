import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  loginForm: FormGroup;
  // login!: '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required]
    });
  }

  // login() {

  //   //Ir al Backend
  //   //Debe tener un Usuario y estar disponible en un servicio
  //   this.loginService.login()
  //       .subscribe( resp => {
  //         console.log(resp);
          
  //         if( resp.id ) {
  //           this.router.navigate(['./muro']);

  //         } else 
  //         console.log('error');
          

  //       })


  // }
  login(){
    this.router.navigateByUrl('/muro')
    
  }

}
