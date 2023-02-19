import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _counterReducer = createReducer(
    usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),

    on(cargarUsuariosSuccess, (state, { usuarios }) => (
        {
            ...state,
            loading: false,
            loaded: true,
            users: [...usuarios]
        }
    )),

    on(cargarUsuariosError, (state, { payload }) => (
        {
            ...state,
            loading: false,
            loaded: false,
            error: payload
        }
    )),
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}