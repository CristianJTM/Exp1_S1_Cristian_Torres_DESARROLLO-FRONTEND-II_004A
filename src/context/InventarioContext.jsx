import { createContext, useContext, useReducer } from 'react'
import { ESTADO_INICIAL, inventarioReducer } from './inventarioReducer.js'

export const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
  const [articulos, dispatch] = useReducer(inventarioReducer, ESTADO_INICIAL)

  return (
    <InventarioContext.Provider value={{ articulos, dispatch }}>
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  const contexto = useContext(InventarioContext)

  if (!contexto) {
    throw new Error('useInventario debe usarse dentro de InventarioProvider')
  }

  return contexto
}

export { ACCIONES } from './inventarioReducer.js'
