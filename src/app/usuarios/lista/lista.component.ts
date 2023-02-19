import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store'
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users: Usuario[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());
    
    // this.userService.getUser().subscribe(users => {
    //   console.log("users", users);
    //   this.users = users;
    // });
  }
}
