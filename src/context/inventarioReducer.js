export const ESTADO_INICIAL = []

export const ACCIONES = {
  AGREGAR: 'ADD_ARTICULO',
  ELIMINAR: 'DELETE_ARTICULO',
}

export function inventarioReducer(state, action) {
  switch (action.type) {
    case ACCIONES.AGREGAR:
      return [...state, action.payload]

    case ACCIONES.ELIMINAR:
      return state.filter((articulo) => articulo.id !== action.payload)

    default:
      return state
  }
}
