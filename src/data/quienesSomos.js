import { DIRECCION_CORTA } from './sitio.js'

export const HERO_QUIENES = {
  eyebrow: 'Nuestra historia',
  title: 'Una familia que crece contigo',
  lead: 'Desde 2016, Súper Fresco ha sido el almacén de confianza del barrio. Hoy tenemos un local en Temuco y el mismo compromiso de siempre: buena comida, precios justos y atención cercana.',
}

export const HISTORIA = {
  eyebrow: 'Cómo empezó todo',
  title: 'De un pequeño almacén a tu supermercado de confianza',
  paragraphs: [
    'Todo comenzó con un mesón de madera, una balanza y las ganas de ofrecer algo mejor al barrio. Cristian Torres y su familia abrieron las puertas del local en 2016, cuando conseguir fruta fresca cerca de casa no era tan fácil.',
    'Con los años, los vecinos se fueron convirtiendo en clientes de todas las semanas y el almacén creció con ellos. Sumamos nuevos productos, ampliamos el local y armamos un equipo que comparte una idea simple: comprar debería ser una experiencia cercana, no una carrera contra el reloj.',
    'Hoy seguimos eligiendo proveedores en persona, revisando la fruta cada mañana y saludando a quien entra por la puerta. Porque crecer no significa dejar de ser un supermercado de barrio.',
  ],
}

export const HITOS = [
  {
    año: '2016',
    titulo: 'Nace el almacén de barrio',
    texto:
      'La familia Torres abre un pequeño almacén en Temuco con lo esencial: frutas, pan y lácteos para los vecinos.',
  },
  {
    año: '2019',
    titulo: 'El local crece',
    texto:
      'La buena recepción del barrio nos permite ampliar el local e incorporar carnes, despensa y productos de limpieza.',
  },
  {
    año: '2021',
    titulo: 'Despacho a domicilio',
    texto:
      'Comenzamos a llevar pedidos a la puerta de cada casa, sin dejar de atender el mostrador.',
  },
  {
    año: '2026',
    titulo: 'Diez años acompañando al barrio',
    texto:
      'Hoy somos un equipo de 12 personas que trabaja cada día para que comprar rico sea simple, en el mismo local de siempre.',
  },
]

export const PROPOSITO = {
  eyebrow: 'Lo que nos mueve',
  title: 'Misión, visión y valores',
  mision: {
    icono: '🎯',
    titulo: 'Misión',
    texto:
      'Acercar productos frescos y de calidad a cada familia, con precios justos y una atención cercana que haga la compra más simple.',
  },
  vision: {
    icono: '🌄',
    titulo: 'Visión',
    texto:
      'Ser el supermercado de barrio referente en Temuco y La Araucanía, reconocido por su frescura, su servicio y su compromiso con los proveedores locales.',
  },
  valores: {
    icono: '💚',
    titulo: 'Valores',
    items: [
      'Cercanía: conocemos a nuestros vecinos por su nombre.',
      'Frescura: revisamos la calidad de cada producto antes de exhibirlo.',
      'Transparencia: precios claros y ofertas sin letra chica.',
      'Trabajo local: compramos a pequeños productores de la zona.',
    ],
  },
}

export const EQUIPO_SECCION = {
  eyebrow: 'Las personas detrás',
  title: 'Un equipo que conoce el barrio',
  lead: 'Detrás de cada pasillo y cada caja hay personas que se preocupan de que tu compra salga bien.',
}

export const CTA_QUIENES = {
  title: '¿Quieres conocer nuestro local?',
  text: `Te esperamos en ${DIRECCION_CORTA}. Escríbenos si quieres coordinar una visita o un pedido con despacho a domicilio.`,
  primary: { to: '/contacto', label: 'Contáctanos' },
  secondary: { to: '/', label: 'Volver al inicio' },
}
