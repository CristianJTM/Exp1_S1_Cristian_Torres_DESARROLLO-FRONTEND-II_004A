# AGENTS.md — Supermercado React App

## Contexto
SPA desarrollada con React y React Router v6.
Curso: Desarrollo Frontend II (PFY2202) — Semana 1, Actividad Formativa.

## Stack
- React 18 (Create React App o Vite)
- react-router-dom v6
- CSS plano (sin frameworks externos)
- Sin backend — todo es frontend estático

## Estructura de carpetas
src/
components/
Navbar.jsx        ← menú inferior persistente
Home.jsx          ← página principal
QuienesSomos.jsx  ← página 2
Contacto.jsx      ← página 3
App.jsx             ← BrowserRouter + Routes aquí
App.css
index.js

## Reglas de código

- Solo componentes funcionales con hooks
- Navegación SIEMPRE con `<Link to="">` de `react-router-dom` v6, NUNCA `<a href="">`
- Navbar fuera de `<Routes>` para que sea persistente en todas las vistas
- Navbar fijo en la parte inferior (`position: fixed; bottom: 0`)
- Cada página en su propio archivo `.jsx` en `src/components/`

## Rutas
- "/"                → Home
- "/quienes-somos"   → QuienesSomos
- "/contacto"        → Contacto

## Pauta de evaluación
1. React Router correctamente implementado y funcional (50 pts)
2. Todos los requerimientos del enunciado cubiertos (50 pts)

## Git
- Repo:  https://github.com/CristianJTM/Exp1_S1_Cristian_Torres_DESARROLLO-FRONTEND-II_004A.git
- Branch: main
- Solo realizar commits cuando yo verifique que todo funcione
- Commits descriptivos por cada componente completado
- Verificar .gitignore excluye node_modules y todo lo que no sea necesario para el repositorio