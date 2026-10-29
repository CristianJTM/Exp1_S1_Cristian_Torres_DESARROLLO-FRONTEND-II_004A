# Súper Fresco 🛒

SPA de supermercado desarrollada como actividad formativa de **Desarrollo Frontend II (PFY2202)**.

La aplicación simula el sitio de un supermercado de barrio en Temuco e incluye tres vistas conectadas
con React Router v6, un menú de navegación inferior persistente y un formulario de contacto con
validación en el cliente.

## Sitio publicado

[Ver la aplicación en GitHub Pages](https://cristianjtm.github.io/Exp1_S1_Cristian_Torres_DESARROLLO-FRONTEND-II_004A/)

## Stack

- React 18.3.1
- React Router DOM 6.30.6
- Vite 5
- CSS Modules sobre CSS plano (sin frameworks)

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
├─ pages/
│  ├─ Home.jsx
│  ├─ QuienesSomos.jsx
│  ├─ Contacto.jsx
│  └─ NotFound.jsx
│
├─ components/
│  ├─ layout/
│  │  ├─ AppLayout.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  └─ ScrollToTop.jsx
│  ├─ ui/
│  │  ├─ PageHero.jsx
│  │  ├─ SectionHead.jsx
│  │  ├─ CtaBand.jsx
│  │  └─ StatList.jsx
│  ├─ home/
│  │  ├─ Hero.jsx
│  │  ├─ CategoryGrid.jsx
│  │  ├─ FeaturedProducts.jsx
│  │  └─ BenefitsGrid.jsx
│  ├─ about/
│  │  ├─ StorySection.jsx
│  │  ├─ Timeline.jsx
│  │  ├─ TimelineItem.jsx
│  │  ├─ PurposeGrid.jsx
│  │  ├─ MvCard.jsx
│  │  ├─ TeamGrid.jsx
│  │  └─ TeamCard.jsx
│  ├─ contact/
│  │  ├─ ContactInfo.jsx
│  │  ├─ ContactForm.jsx
│  │  └─ FormField.jsx
│  └─ products/
│     └─ ProductCard.jsx
│
├─ data/
│  ├─ navegacion.js
│  ├─ sitio.js
│  ├─ home.js
│  ├─ quienesSomos.js
│  ├─ contacto.js
│  ├─ productos.js
│  └─ equipo.js
│
├─ hooks/
│  └─ useContactForm.js
│
├─ utils/
│  ├─ validacion.js
│  └─ formatoMoneda.js
│
├─ styles/
│  ├─ tokens.css
│  ├─ base.css
│  ├─ layout.css
│  └─ utilities.css
│
├─ App.jsx
└─ main.jsx
```

Cada componente o página que necesita estilos propios tiene su archivo `*.module.css` junto al
`.jsx`.

## Arquitectura

| Capa | Responsabilidad |
| --- | --- |
| `pages/` | Componer las vistas a partir de secciones y componentes |
| `components/layout/` | Shell persistente: navbar, footer, scroll y `<Outlet />` |
| `components/ui/` | Componentes compartidos: `PageHero`, `SectionHead`, `CtaBand`, `StatList` |
| `components/home`, `about`, `contact`, `products` | Secciones y piezas de dominio |
| `data/` | Contenido estático, textos compartidos y datos del negocio |
| `hooks/` | Estado y eventos del formulario |
| `utils/` | Validación y formato de moneda, sin JSX |
| `styles/` | Tokens, reset, layout y utilidades globales |
| `*.module.css` | Estilos encapsulados por componente o página |

La dirección, teléfono, correo, horario, navegación y textos de CTA se centralizan en `data/` para
evitar duplicaciones. Las páginas no contienen datos del negocio hardcodeados.

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
- Los estilos usan CSS Modules sobre CSS plano: los tokens, el reset, el layout y las utilidades
  compartidas permanecen globales; el resto se encapsula por componente.

## Autor

Cristian Torres — Proyecto académico PFY2202.
