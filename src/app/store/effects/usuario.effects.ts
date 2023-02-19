import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import * as userActions from '../actions';
import { catchError, map, mergeMap, of } from 'rxjs'
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(userActions.cargarUsuario),
            mergeMap(
                (action) => {
                    console.log("action", action);
                    console.log("action.id", action.id);

                    return this.usuariosService.getUser(action.id)
                        .pipe(
                            map(user => { console.log("usuario effect", user); return userActions.cargarUsuarioSuccess({ usuario: user }); }),
                            catchError(error => of(userActions.cargarUsuarioError({ payload: error }))) // We use of to return an Observable
                        )
                }
            )
        )
    );
}
