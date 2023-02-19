import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      console.log("users", users);
    });
  }

}
