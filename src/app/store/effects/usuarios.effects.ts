import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import * as userActions from '../actions/usuarios.actions';
import { tap, mergeMap } from 'rxjs'
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions, // Observable that works as a listener of the actions that are fired
        private usuariosService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        // Callback that return an Observable
        () => this.actions$.pipe(
            ofType(userActions.cargarUsuarios),
            tap(data => console.log("Effect Tap: ", data)),

            // Trigger a new Observable
            mergeMap(
                () => this.usuariosService.getUser() // Observable that I want to trigger
                    .pipe(
                        tap(data => console.log("getUsers effect", data))
                    )
            )
        )
    );
}
