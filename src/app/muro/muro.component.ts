import { Component } from '@angular/core';
import { MuroService } from '../services/muro.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-muro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './muro.component.html',
  styleUrl: './muro.component.css'
})
export default class MuroComponent {

  // posts: any[] = [];
  newPostTitle!: string;
  newPostContent!: string;
  posts = [
    {
      title: 'Post 1',
      content: 'Contenido del Post 1',
      date: '2024-02-14'
    },
    {
      title: 'Post 2',
      content: 'Contenido del Post 2',
      date: '2024-02-15'
    }
  ];

  postForm: FormGroup;
  modalOpen = true; // variable de estado para controlar la apertura/cierre de la modal

  constructor(private formBuilder: FormBuilder, private muroService: MuroService) {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  

  ngOnInit() {
    this.loadPosts();
  }
// Cargar posts
  loadPosts() {
    this.muroService.getAllPosts().subscribe((data: any) => {
      this.posts = data.posts;
    });
  }

  //Crear un nuevo post
  createPost() {
    this.muroService.createPost({
      title: this.newPostTitle,
      content: this.newPostContent
    }).subscribe(() => {
      this.loadPosts(); // Actualizar la lista de publicaciones después de crear una nueva publicación
      this.newPostTitle = '';
      this.newPostContent = '';
    });
  }

  openModal() {
    this.modalOpen = true; // abrir la modal
  }

  closeModal() {
    this.modalOpen = false; // cerrar la modal
  }
  
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  
  

}
