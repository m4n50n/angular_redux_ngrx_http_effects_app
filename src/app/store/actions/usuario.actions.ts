import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] Cargar Usuario',
    props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuarios] Cargar Usuario Success',
    props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuarios] Cargar Usuario Error',
    props<{ payload: any }>()
);