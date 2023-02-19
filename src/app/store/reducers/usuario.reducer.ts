import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: any,
    user: any,
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(
    usuarioInitialState,
    on(cargarUsuario, (state, { id }) => ({ ...state, id: id, loading: true })),

    on(cargarUsuarioSuccess, (state, { usuario }) => (
        {
            ...state,
            loading: false,
            loaded: true,
            user: { ...usuario }
        }
    )),

    on(cargarUsuarioError, (state, { payload }) => (
        {
            ...state,
            loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }
    )),
);

export function usuarioReducer(state: any, action: any) {
    return _usuarioReducer(state, action);
}