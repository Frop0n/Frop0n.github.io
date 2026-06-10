# Bolsillo Fotografía — Sitio Web

Sitio web estático para **Bolsillo Producciones SPA**, estudio de fotografía y video ubicado en Constitución 8, Bellavista, Providencia, Santiago de Chile.

Hosteado en **GitHub Pages**. Sin frameworks, sin dependencias npm — HTML, CSS y JS vanilla puro.

---

## Estructura del repositorio

```
Bolsillo_Fotografia_DEV/
│
├── index.html              ← Página principal del sitio
├── terminos.html           ← Términos y Condiciones
│
├── ESTUDIO/                ← Fotografías de retratos en estudio
│   ├── _DSC3935-Editar.webp
│   ├── _DSC6313-Editar.webp
│   ├── _DSC6318-Editar-Editar.webp
│   ├── _DSC6601-Editar-Editar-Editar.webp
│   ├── _DSC9154.webp
│   └── _DSC9419-Editar.webp
│
├── GASTRONOMIA/            ← Fotografías gastronómicas
│   ├── Pizzas (En Masa) (1).webp
│   ├── Hamburgeuesas (Cervezeria Colina) (4).webp
│   ├── Dos_burguers_30.webp
│   └── Calamar_Rolls.webp
│
├── Social/                 ← Eventos sociales (matrimonios, cumpleaños, bautizos)
│   ├── _DSC6842.webp
│   ├── DSC08250-Editar.webp
│   ├── _DSC7252.webp
│   ├── DSC01629.webp
│   ├── DSC03804.webp
│   └── DSC07815-Editar-Editar.webp
│
├── CORPO/                  ← Headshots corporativos
│   ├── _DSC2152.webp
│   ├── _DSC2191.webp
│   ├── _DSC2201.webp
│   └── _DSC2244.webp
│
├── BTS-MUSICA/           ← Conciertos, BTS, sesiones musicales
│   ├── _DSC8763.webp
│   ├── DSC05370-Editar.webp
│   ├── _DSC5983-Editar.webp
│   ├── _DSC6290-Editar.webp
│   ├── DSC08930-Editar.webp
│   └── DSC05338-Editar.webp
│
└── Airbnb/                 ← Fotografía inmobiliaria (pendiente)
    └── LOGO.webp            ← Placeholder temporal
```

---

## Secciones del sitio

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#hero` | Fondo galaxia animado + feed de Instagram (@midori.tiff via Behold.so) |
| Quiénes somos | `#intro` | Descripción del estudio + mapa embebido Google Maps |
| Servicios | `#categorias` | 6 acordeones colapsables con galerías y precios |
| Oferta de Inauguración | `#agenda` | 3 planes con descuento del 17% |
| Han confiado en nosotros | `#clientes` | Marcas clientes |
| Contacto | `#contacto` | Formulario + datos de contacto |
| Términos y Condiciones | `/terminos.html` | Página separada con 14 artículos |

### Categorías de servicios
1. **Retratos en estudio** — Económico / Studio / Studio+
2. **Marcas y gastronomía** — Pack Top 5 / Carta completa / Retainer mensual
3. **Eventos sociales** — Esencial / Día completo / Full Experience
4. **Corporativo y headshots** — Headshots / Medio día / Día completo
5. **Audiovisual y música** — Sesión musical / Concierto / BTS rodaje
6. **Inmobiliaria y Airbnb** — Pack Airbnb / Propiedad completa

---

## Tecnologías y servicios externos

| Servicio | Uso | Configuración |
|---|---|---|
| **GitHub Pages** | Hosting estático gratuito | Rama `main`, archivo raíz `index.html` |
| **Behold.so** | Widget de Instagram en el hero | Feed ID: `IiGsbQeN0BouSPRACpQG` (cuenta @midori.tiff) |
| **Calendly** | Agendamiento de sesiones | URL: `calendly.com/bolsillo-contacto/bolsillo-fotografia` |
| **Google Maps** | Mapa embebido en "Quiénes somos" | Constitución 8, Providencia |
| **Google Fonts** | Tipografía | Unbounded (títulos) + DM Sans (cuerpo) |

---

## Funcionalidades técnicas

- **Galaxia animada** — canvas `<canvas>` con partículas, neblinas y destellos en estrella, dibujado con `requestAnimationFrame`
- **Acordeones de servicios** — colapsan/expanden con CSS + JS puro, solo uno abierto a la vez
- **Lightbox** — click en cualquier foto de galería abre lightbox, cierra con ESC o click fuera
- **Ticker animado** — franja con texto en loop continuo con CSS `animation`
- **Animaciones slide-in** — `IntersectionObserver` activa clases `.slide-left`, `.slide-up`, `.slide-right` al entrar al viewport; respeta `prefers-reduced-motion`
- **Feed de Instagram** — widget de Behold.so cargado como módulo JS
- **Modal de T&C** — aparece al cargar el sitio por primera vez en la sesión; requiere aceptación explícita; se guarda en `sessionStorage`
- **Modal de Calendly** — intercepta todos los botones de agendamiento con explicación del proceso antes de redirigir
- **Formulario de contacto** — con checkbox de T&C obligatorio; el botón de envío queda deshabilitado hasta marcarlo
- **Imágenes con `object-fit: cover`** — todas las fotos se recortan uniformemente según el tipo de grilla (portrait 3/4, cuadrado 1/1, landscape 4/3)

---

## Tipografía

| Familia | Pesos usados | Uso |
|---|---|---|
| **Unbounded** | 200, 300, 400, 700 | Títulos, labels, precios, nav |
| **DM Sans** | 200, 300, 400 | Cuerpo de texto, formularios |

---

## Paleta de colores

```
--bg:      #050506       Fondo principal
--glass:   rgba(255,255,255,.07)   Superficies glassmorphism
--border:  rgba(255,255,255,.10)   Bordes sutiles
--white:   #F8F8F8       Texto principal
--mid:     rgba(255,255,255,.50)   Texto secundario
--muted:   rgba(255,255,255,.28)   Texto terciario / labels
```
Verde musgo de botones de acción: `#3B5C3F`

---

## Cómo actualizar las fotografías

Cada galería usa `<img src="CARPETA/archivo.webp">` con rutas relativas desde la raíz del repo. Para reemplazar una foto:

1. Agrega el archivo nuevo a la carpeta correspondiente (`ESTUDIO/`, `GASTRONOMIA/`, etc.)
2. En `index.html`, busca el `src` de la imagen que quieres cambiar y actualiza el nombre del archivo
3. El CSS se encarga de recortar y uniformar el tamaño automáticamente con `object-fit: cover`

Para agregar fotos a la sección de **Inmobiliaria / Airbnb** (actualmente con placeholder):
- Agrega los archivos a la carpeta `Airbnb/`
- Reemplaza las 4 líneas `<img src="Airbnb/LOGO.webp">` por las rutas reales

---

## Contacto del estudio

- **Instagram:** [@bolsilloprod](https://instagram.com/bolsilloprod)
- **WhatsApp:** +56 9 8674 0998
- **Email:** bolsillo.contacto@gmail.com
- **Dirección:** Constitución 8, Providencia, Santiago
- **Agendamiento:** [calendly.com/bolsillo-contacto/bolsillo-fotografia](https://calendly.com/bolsillo-contacto/bolsillo-fotografia)
- **Pagina Web por:** Francisco Palomo Traslaviña - Director de Postproduccion y Tecnologias en Bolsillo SPA @Frop0n en instagram

---

© 2026 Bolsillo Producciones SPA. Todos los derechos reservados.
