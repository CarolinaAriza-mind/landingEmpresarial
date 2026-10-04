# DOCUMENTACIÓN TÉCNICA
## Landing Empresarial — Sitio Web Oficial
---

## 1. Descripción General

Pablo M González es el sitio web personal del consultor de liderazgo ético Pablo M González. Su objetivo es presentar la propuesta de valor del consultor, conectar con tres perfiles de audiencia distintos (Personas, Empresas y Deportistas) y generar contacto directo vía WhatsApp.

---

## 2. Stack Tecnológico

| Tecnología | Versión | Rol en el proyecto |
|---|---|---|
| Next.js | 15+ | Framework principal — App Router |
| Tailwind CSS | v4 | Estilos y diseño responsivo |
| Framer Motion | Latest | Animaciones de entrada y transiciones |
| TypeScript | 5+ | Tipado estático |
| Manrope | Google Fonts | Tipografía principal (sans-serif) |
| Libre Baskerville | Google Fonts | Tipografía editorial (serif) |
| Material Symbols | Google | Íconos de interfaz |

---

## 3. Estructura del Proyecto

La raíz del proyecto Next.js es la carpeta `pablo-gonzalez/`. Vercel debe apuntarse a ese subdirectorio.

```
PabloMGonzalez/
├── pablo-gonzalez/              <- Raíz del proyecto Next.js
│   ├── app/
│   │   ├── layout.tsx           <- Layout raíz, fuentes, metadata
│   │   ├── page.tsx             <- Página principal (home)
│   │   ├── globals.css          <- Estilos globales, tokens de marca
│   │   ├── icon.png             <- Favicon
│   │   ├── personas/page.tsx    <- Perfil Personas
│   │   ├── empresas/page.tsx    <- Perfil Empresas
│   │   └── deportistas/page.tsx <- Perfil Deportistas
│   ├── components/
│   │   ├── sections/            <- Secciones de la página principal
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── BrandPositioning.tsx
│   │   │   ├── ThreePillars.tsx
│   │   │   ├── NavigationPaths.tsx
│   │   │   ├── CallToAction.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                  <- Componentes reutilizables
│   │       ├── ThemeProvider.tsx
│   │       └── ThemeToggle.tsx
│   ├── public/                  <- Assets estáticos
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

---

## 4. Páginas y Rutas

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `app/page.tsx` | Página principal (home) con todas las secciones |
| `/personas` | `app/personas/page.tsx` | Landing para el perfil Personas |
| `/empresas` | `app/empresas/page.tsx` | Landing para el perfil Empresas |
| `/deportistas` | `app/deportistas/page.tsx` | Landing para el perfil Deportistas |

---

## 5. Componentes

### 5.1 Secciones — página principal

#### Navbar
- Logo de marca con `next/image`
- Links de navegación para desktop
- Menú hamburguesa responsive para mobile
- CTA "Contacto" que ancla al footer
- Toggle de tema claro/oscuro

#### Hero
- Imagen de fondo full-screen en desktop (`pg_bck_2.png`)
- En mobile: imagen con `aspect-[16/9]` seguida del texto
- Animaciones de entrada con Framer Motion (efecto stagger)
- Eyebrow dorado + subtítulo en Libre Baskerville

#### BrandPositioning
- **Bloque 1:** Historia de Pablo — imagen, cita en blockquote y stats clave
- **Bloque 2:** Enfoque — 4 cards de servicios con efecto shimmer dorado

#### ThreePillars
- 3 cards con imagen de fondo
- Efectos hover/active: desaturación → color, shimmer dorado, glow y borde inferior
- En mobile: descripción siempre visible (sin necesidad de hover)

#### NavigationPaths
- 3 cards de acceso: Personas / Empresas / Deportistas
- Mismo sistema de efectos dorados que ThreePillars
- Grid responsive: 1 columna mobile → 2 columnas tablet → 3 columnas desktop

#### CallToAction
Sección intermedia con CTA principal que refuerza la propuesta de valor.

#### Footer
- CTA final: "¿Listo para reescribir tu historia?"
- Botón de WhatsApp (`wa.me`) + enlace de email
- Brand, links legales y copyright

### 5.2 Componentes UI reutilizables

| Componente | Descripción |
|---|---|
| `ThemeProvider.tsx` | Proveedor de contexto de tema claro/oscuro (React Context) |
| `ThemeToggle.tsx` | Botón que alterna entre light mode y dark mode |

---

## 6. Identidad de Marca

### 6.1 Paleta de colores

| Variable / Valor | Color | Uso |
|---|---|---|
| `--color-primary` / `#3b8c5e` | Verde marca | CTAs, íconos, acentos principales |
| `#C9A84C` | Dorado | Acentos, hovers, elementos premium |
| `#E0BD6A` | Dorado claro | Hover secundario |
| `#0d0d0d` | Negro | Fondo principal (dark mode) |
| `#f5f3ef` | Crema | Fondo (light mode) |

### 6.2 Tipografía

| Fuente | Uso | Pesos |
|---|---|---|
| Manrope | Cuerpo, navegación, UI general | 300, 400, 500, 700 |
| Libre Baskerville | Títulos, citas, elementos editoriales | 400, 700, italic |

### 6.3 Pilares de marca

| Pilar | Descripción |
|---|---|
| Exclusividad | Acceso limitado, propuesta de alto valor |
| Autenticidad | Experiencia vivida, no teoría académica |
| Transformación | Cambio sostenible y real en las personas |
| Resiliencia | Fortaleza construida desde la adversidad |

---

## 7. Sistema de Efectos Visuales

Todos los elementos interactivos (cards de pilares, paths de navegación y cards de servicios) comparten el mismo sistema de efectos dorados, activados tanto en hover (desktop) como en `:active` (mobile táctil).

### 7.1 Componentes del efecto

| Efecto | Descripción técnica |
|---|---|
| Shimmer | Gradiente lineal que barre de izquierda a derecha — `translate-x-[-100%]` a `translate-x-[100%]` |
| Glow radial | Gradiente radial desde la parte inferior, opacidad `0 → 1` al hacer hover |
| Borde inferior dorado | Línea que se expande con `scale-x-0 → scale-x-100` desde el centro |
| Desaturación de imagen | La imagen pasa de escala de grises a color pleno al hacer hover |

> `group-active:` en las clases de Tailwind habilita los efectos en dispositivos táctiles.

---

## 8. Assets Estáticos

| Archivo | Uso |
|---|---|
| `LOGO PNG (4).png` | Logo completo (ícono + wordmark) — Navbar y footer |
| `ICONO PNG (4).png` | Solo el ícono de marca — usos reducidos |
| `pg_bck_2.png` | Imagen de fondo del Hero |
| `pg_bck_3.png` | Imagen de fondo sección Filosofía / Pilares |
| `pilar.png` | Imagen card Pilar 02 |
| `spartano.jpeg` | Imagen card Pilar 03 |

---

## 9. Setup Local

### 9.1 Requisitos previos
- Node.js >= 18
- npm >= 9
- Git

### 9.2 Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/CarolinaAriza-mind/PabloMGonzalez.git

# 2. Ingresar al directorio del proyecto
cd PabloMGonzalez/pablo-gonzalez

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# Disponible en http://localhost:3000
```

### 9.3 Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción optimizado |
| `npm run lint` | Verificación de errores ESLint |
| `git add . && git commit -m '...' && git push` | Publicar cambios (dispara deploy en Vercel) |

---

## 10. Deploy y Configuración de Producción

### 10.1 Plataforma

El sitio se despliega automáticamente en **Vercel** con cada push a la rama `main`. No se requiere intervención manual.

**URL de producción:** https://pablo-m-gonzalez-carolinaarizat93-3964s-projects.vercel.app

### 10.2 Configuración en Vercel

- **Root Directory:** `pablo-gonzalez`
- **Framework Preset:** Next.js (detectado automáticamente)
- **Build Command:** `npm run build` (por defecto)
- **Output Directory:** `.next` (por defecto)

---

## 11. Variables de Entorno

El proyecto actualmente no requiere variables de entorno. El formulario de contacto utiliza un enlace directo de WhatsApp (`wa.me`) sin servidor intermedio.

Si en el futuro se implementa un formulario con envío de emails mediante Resend, agregar en Vercel:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 12. Contacto del Proyecto

Cliente / Propietario | Pablo M González

---

**Desarrollo | Carolina Ariza | GitHub: CarolinaAriza-mind**

---

*Proyecto Terminado*
