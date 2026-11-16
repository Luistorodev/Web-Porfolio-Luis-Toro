# Notas de la sesión de ajustes — 15 nov 2026

Rama de trabajo: `ajustes` (ya fusionada en `main` y publicada en https://www.luistoro.me).
Commits: `5f35b66` → `14c0759` (7 commits sobre `039db0a`).

## Cambios publicados

### Cursor personalizado (`src/components/Cursor.astro`)
- Animación del pill "VIEW PROJECT" reescrita para que sea fluida:
  - Ancho/alto se animan en px (antes saltaba porque `w-fit` no se puede animar).
  - Un solo estado (`default` / `link` / `project`) decidido en `mouseover` → sin parpadeo al pasar entre elementos de la tarjeta.
  - Movimiento con `transform` y easing independiente de los FPS.
  - El texto entra con retraso, desplazamiento y blur suaves; sale rápido.
  - Se oculta al salir de la ventana; respeta `prefers-reduced-motion`.
- Texto traducido vía i18n: `VIEW PROJECT` / `VER PROYECTO` (`ui[lang].viewProject`, pasado desde `Layout.astro`).

### Tipografías sin "salto" al cargar
- Se reemplazó Google Fonts (`display=swap`) por la **Fonts API de Astro** (`astro.config.mjs` → `fonts`).
- Fuentes auto-hospedadas, Inter y Geist Mono con `preload`, fallbacks con métricas ajustadas.
- `<Font />` en `Layout.astro`. Las 84 clases `font-['Inter']` etc. pasaron a `font-(family-name:--font-inter)`, `--font-geist-mono`, `--font-instrument-serif`.

### Nuevo rol: Product Design Engineer
- Hero (EN/ES): descripción nueva. El hero mantiene su diseño original.
- Navbar: `PRODUCT DESIGN ENGINEER + AI BUILDER` / `+ CREADOR CON IA`.
- SEO: títulos y descripciones de home/about/cv, valores por defecto del Layout, `jobTitle` del JSON-LD y `site.webmanifest`.
- Los roles de cada caso de estudio y del CV se dejaron como estaban (cargos históricos).

### Responsive
- Navbar: el descriptor se muestra desde 1024px; entre 768–1024px el texto es más pequeño y los links más juntos.
- Footer: entre 768–1024px se apila en 2 líneas (el email causaba scroll horizontal).
- Verificado sin scroll horizontal en 375 / 768 / 1024 / 1440px.

### CV
- Nuevo PDF: `public/assets/Luis-Toro-Product-Design-Engineer-CV.pdf` (origen: `New CV 2025-2026/CV 2027/CV Luis Toro - Design Engineer.pdf`). Se eliminó el PDF de 2025.
- Navbar, `/cv` y `/es/cv` apuntan al nuevo PDF.
- Página `/cv` (EN/ES): experiencia actualizada (Ontop, Circulo de Credito, Kmeleon Tech, Scotiabank Colpatria, Serempre, Finsocial) y educación corregida (Universidad Autónoma del Caribe, 2016–2020).

### Side projects
- Agregados **Nodi Notes** (https://nodinotes.app/) y **Alternum** (https://alternum.site/) con capturas del hero de cada sitio (`src/assets/side-projects/`).
- Eliminada la tarjeta "Personal Finance Manager".
- Texto de introducción actualizado (EN/ES) mencionando Nodi y Alternum.
- Descripciones cortas para Nodi, Alternum y DeepDen (`src/data/sideProjects.ts`).
- Página `/side-projects`: maquetación original (2 columnas, sin descripción).

### Sección "Built by me" en el home
- Nuevo componente `src/components/BuiltByMe.astro`, al final del home (EN/ES), con link a side projects.
- `SideProjectsGrid` tiene `variant="home"` (3 columnas + descripciones) y `variant="page"` (por defecto, maquetación original).

### Dominio y SEO
- `site` en `astro.config.mjs`: `https://www.luistoro.me` (el apex `luistoro.me` redirige a `www` en Vercel).
- Sitemap sin slash final para coincidir con las URLs canónicas (raíz conserva `/`).
- `vercel.json`: `web-porfolio-luis-toro.vercel.app/(.*)` → `https://www.luistoro.me/$1` (308). Solo ese host; los previews de otras ramas no se afectan.
- Verificado en producción: canonical, og:image, sitemap y robots.txt usan `www.luistoro.me`; todas las rutas de vercel.app redirigen.

## Decisiones tomadas
- Se probó un hero rediseñado (titular grande + botones) y se **revirtió**: preferencia por el hero original.
- Se publicó con merge fast-forward de `ajustes` → `main`, solo cuando se pidió explícitamente.

## Pendientes / ideas
- [ ] Enviar `https://www.luistoro.me/sitemap-index.xml` en Google Search Console (requiere verificar el dominio con un TXT en Vercel DNS).
- [ ] Opcional: excluir del sitemap `/work/ontop-app-dark-mode-adaptations` (proyecto "Currently in progress").
- [ ] Opcional: etiquetas de stack en las tarjetas de side projects (falta definir el stack de cada uno).
- [ ] Propuestas de diseño no implementadas: portadas con UI real y menos tarjetas monocromáticas, métricas de impacto al inicio de cada caso, mayor legibilidad del texto, bloque de contacto antes del footer, About más completo.
- [ ] Inconsistencia: el caso de Ontop DS dice rol "Product Designer"; el CV dice "Product Design Engineer & Design System Lead".
- [ ] La conexión de Vercel (MCP) ve los dominios pero no los proyectos/deployments; reautorizar con acceso al proyecto para poder gestionarlo desde Claude.
- [ ] Limpieza local: `.playwright-mcp/` (logs de pruebas), `desktop.ini` y el `.ico` de OneDrive no están en git.
