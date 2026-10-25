# Súper Fresco 🛒

SPA de supermercado desarrollada como actividad formativa de **Desarrollo Frontend II (PFY2202)**.

La aplicación simula el sitio de un supermercado de barrio en Temuco e incluye tres vistas conectadas
con React Router v6, un menú de navegación inferior persistente y un formulario de contacto con
validación en el cliente.

## Stack

- React 18.3.1
- React Router DOM 6.30.6
- Vite 5
- CSS plano (sin frameworks)

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Rutas

| Ruta              | Vista           | Descripción                                                     |
| ----------------- | --------------- | --------------------------------------------------------------- |
| `/`               | Home            | Landing con bienvenida, categorías y productos destacados        |
| `/quienes-somos`  | QuienesSomos    | Historia, misión, visión, valores y equipo ficticio              |
| `/contacto`       | Contacto        | Datos de contacto ficticios y formulario con validación          |
| `*`               | NotFound        | Página 404 con enlace de retorno al inicio                       |

Toda la navegación interna usa `Link` y `NavLink` de `react-router-dom`. El menú inferior está
fuera de `<Routes>`, por lo que permanece visible en todas las vistas.

## Estructura

```text
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Home.jsx
│  ├─ QuienesSomos.jsx
│  ├─ Contacto.jsx
│  ├─ ProductCard.jsx
│  ├─ ScrollToTop.jsx
│  └─ NotFound.jsx
├─ data/
│  ├─ productos.js
│  └─ equipo.js
├─ App.jsx
├─ App.css
└─ main.jsx
```

## Despliegue en GitHub Pages

El sitio se publica en la rama `gh-pages` con el paquete `gh-pages`:

```bash
npm run deploy
```

El script `predeploy` ejecuta el build, `postbuild` genera `dist/404.html` (fallback para
`BrowserRouter`) y `gh-pages` publica `dist/` con `.nojekyll` en la rama `gh-pages`.

URL del sitio:

```text
https://cristianjtm.github.io/Exp1_S1_Cristian_Torres_DESARROLLO-FRONTEND-II_004A/
```

Para habilitarlo por primera vez en GitHub: **Settings → Pages → Source: Deploy from a branch →
Branch: `gh-pages` / (root)**. Cada ejecución de `npm run deploy` reemplaza el contenido de la
rama con el build más reciente.

## Notas

- No hay backend ni llamadas a APIs: los datos son ficticios y el formulario no envía información
  a ningún servidor.
- El proyecto usa `BrowserRouter`. Para GitHub Pages se configuró `base` en Vite, `basename` en
  React Router y un fallback `404.html`, de modo que las subrutas funcionen al recargar. En otros
  hostings estáticos puede ser necesario configurar su propio fallback de SPA.
- El diseño es responsive y reserva espacio para la barra inferior con `padding-bottom` y
  `env(safe-area-inset-bottom)`.

## Autor

Cristian Torres — Proyecto académico PFY2202.
