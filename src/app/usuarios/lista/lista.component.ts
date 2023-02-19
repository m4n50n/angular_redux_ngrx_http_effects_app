import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.userService.getUser().subscribe(users => {
    //   console.log("users", users);
    //   this.users = users;
    // });
  }
}
