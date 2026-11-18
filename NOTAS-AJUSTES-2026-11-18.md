# Notas de la sesión de rediseño — 17–18 nov 2026

Rama de trabajo: `UI-New-version` (creada desde `UI-propousal`, fusionada en `main` y publicada en https://www.luistoro.me).
Commit: `ea201c7` — *Nuevo diseño del portafolio inspirado en charleshonig.design*.
Punto de partida: `b14e316` (el diseño anterior, que sigue guardado en la rama `backup`).

## Respaldo del diseño anterior

- La rama **`backup`** apunta a `b14e316`, el sitio que estaba en producción antes del rediseño. Está subida a `origin/backup`.
- Hay dos formas de volver a ese diseño:
  - **Rápida, solo la web:** en Vercel → Deployments, elegir el deploy de `b14e316` y usar "Promote to Production".
  - **Completa, código y web:** llevar `main` a `backup`, ya sea con un merge o un reset coordinado, y hacer push. Vercel redespliega en ~2 min.

## Home nuevo (`src/components/home/`)

Inspirado en la estructura de charleshonig.design, con contenido propio:

- **`HomeIntro.astro`**:
  - Titular: "I'm **Luis Toro**, a Product Design Engineer who turns complexity into clear products" (EN/ES).
  - Frase "Currently building design systems and products @" con el tag del logo de Ontop. El logo se queda en `h-[14px]`; una versión de 30px se probó y se descartó por grande.
  - Ubicación (Barranquilla) y hora local en vivo (`America/Bogota`, COT).
  - Se quitó la grilla/mosaico de portadas que había debajo, porque las fotos no quedaban bien encuadradas.
- **`WorkShowcase.astro`**:
  - 4 casos destacados: Ontop Wallet, Ontop DS, Círculo de Crédito y Scotiabank DS.
  - A la izquierda, texto fijo (sticky) con título, empresa, resumen, año/rol/alcance y el botón "View case study". A la derecha, un collage con la portada y 2 imágenes del caso.
  - Todo sale de los datos existentes (`caseStudies`, `projects`).
  - El título "Selected work" quedó oculto (`sr-only`), solo para lectores de pantalla.
- **`PlayCarousel.astro`**:
  - Sección **"Side Projects" / "Proyectos personales"**, nombre que se prefirió sobre "Play".
  - Carrusel con scroll-snap, flechas que avanzan una tarjeta por clic y que se desactivan en los extremos.
  - Tarjetas 2:1, la proporción de las capturas, para que se vean completas.
- **`HomeStory.astro`**: "My story" con la bio (textos del hero y del antiguo About), el retrato del hero y la experiencia en columnas.
- **`ContactBlock.astro`**: cierre oscuro "Let's build something great together." con email, CV, LinkedIn y GitHub. Reemplaza al footer en el home y en los casos de estudio.

## Casos de estudio (`ProjectContent.astro`, `ImageBlock.astro`, `CaseStudyNavigation.astro`)

- **Barra lateral fija:** "← Back to work" y un índice de capítulos con scroll-spy. Los capítulos salen de `label` (Overview) y `subheading` (Problem, Research, Design Decisions, Solution, Impact).
- **Encabezado:** título grande, tagline, fila Role / Timeline / Scope y tiempo de lectura (calculado a 220 palabras por minuto).
- **Capítulos:** dos columnas, con el título a la izquierda (sticky en ≥1280px) y el contenido a la derecha. El cuerpo pasó de 13px a 16–17px.
- **Imágenes:** las de pantallas (`contain`) van sobre paneles grises. Las portadas especiales (overlay, logo, composites) se ven igual que antes.
- **Tipografías originales del usuario conservadas:**
  - Instrument Serif en subtítulos destacados (`'''`), títulos de columnas y citas.
  - Geist Mono en mayúsculas para la tagline, los rótulos de metadatos y el "min read".
- **Navegación entre casos:** las tarjetas anterior/siguiente se alinearon al nuevo ancho.

## About eliminado

- Se borraron `src/pages/about.astro`, `src/pages/es/about.astro` y `src/components/AboutGallery.astro`. También se quitó "ABOUT" del navbar (desktop y móvil).
- `vercel.json`: redirecciones 308 `/about` → `/` y `/es/about` → `/es`, verificadas en producción.
- Las fotos de la galería siguen en `src/assets/about/`, pero no se usan ni se publican.

## Otros cambios de código

- `src/data/experience.ts`: lista única de experiencia (EN/ES), usada por el home y por `/cv` y `/es/cv`, que antes tenían copias duplicadas.
- `src/data/i18n.ts`:
  - Bloque nuevo `home` (EN/ES).
  - `projectMeta` ahora incluye `readTime` y `onThisPage`.
  - El rótulo `skills` pasó a "Scope" / "Alcance".
- Los componentes viejos `Hero.astro`, `PortfolioGrid.astro` y `BuiltByMe.astro` quedan en el repo, pero el home ya no los usa.

## Verificación

- Overflow horizontal: 0 en 375 / 768 / 1024 / 1440px, en el home y en los 11 casos de estudio.
- Revisado en tema claro y oscuro.
- `npx astro build` sin errores.
- En producción, tras el deploy (~105 s): `/`, `/es`, los casos de estudio, `/side-projects` y `/cv` responden 200, y `/about` y `/es/about` responden 308.

## Incidencia del entorno local

- Después de `npx astro build`, el visor de imágenes (PhotoSwipe) dejó de abrir en local por un error *504 Outdated Optimize Dep* de Vite.
- No era un bug del código, y en producción no pasa.
- Solución: `npx astro dev stop` y luego `npx astro dev --background --force`.

## Cloudflare (configuración de la máquina, no del proyecto)

- Plugin de Claude Code `cloudflare@cloudflare`, instalado desde el marketplace `cloudflare/skills`.
- CLI oficial `cf` (v0.15.0) instalado globalmente y autenticado con `cf auth login`.
- Regla global en `~/.claude/CLAUDE.md`: usar `cf` salvo en proyectos con configuración de Wrangler.
- Wrangler no está instalado; si un proyecto lo requiere, se instala localmente en ese proyecto.
- El portafolio sigue en Vercel; esto no afecta a www.luistoro.me.

## Pendientes / ideas

- [ ] Revisar y ajustar a tu voz el titular y la frase "Currently building…" del home (EN/ES).
- [ ] Decidir si se borran los componentes sin uso (`Hero`, `PortfolioGrid`, `BuiltByMe`) y las fotos de `src/assets/about/`.
- [ ] Opcional: rediseñar el navbar con el estilo de la referencia (letras tipo tecla y botón de contacto).
- [ ] Opcional: llevar `/side-projects` y `/cv` al lenguaje visual nuevo; todavía usan el diseño anterior.
- [ ] El caso de Phylo (Legal Tech) solo tiene 2 capítulos, así que su índice lateral es corto.

# Auditoría de seguridad y endurecimiento — 18 nov 2026

Rama de trabajo: `UI-New-version` sobre `ea201c7`. Commit: *Endurecimiento de seguridad (CSP, cabeceras y dependencias)*.

## 1. Dependencias

- `npm audit fix` (sin `--force`): 22 avisos (1 crítico, 21 altos) → **12 altos**.
  - `astro` 7.0.3 → **7.4.12** (quitaba el RCE de AVIF `GHSA-26w7-cxv4-gfx2` y 9 XSS).
  - `sharp` 0.35.3 → **0.35.5**, `vite` 8.1.0 → **8.3.8**, `devalue` 5.8.1 → **6.0.3**,
    `postcss`, `zod`, `svgo`, `nanoid`, `js-yaml`, `smol-toml`, `fast-uri`, `picomatch`,
    `source-map-js`, `unstorage`, `@astrojs/check` 0.9.9 → 0.9.12.
- Los 12 restantes son **un solo advisory sin fix upstream**: `picomatch` ReDoS
  (`GHSA-fc5q-39xc-vjpf`, rango `*`; la última versión, 4.0.7, sigue afectada). Es de
  *build-time* (glob matching) y no es alcanzable desde el sitio estático. No se aplicó
  `--force` porque proponía bajar `astro` a 5.3.0.
- `npm run build` y `npx astro check` en verde después del upgrade.

## 2. CSP

- `astro.config.mjs` → `security.csp` con `default-src 'self'`, `connect-src` y `img-src`
  ampliados solo a `https://*.clarity.ms` (+ `https://c.bing.com` en connect) y
  `font-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`.
- `style-src` lleva `'unsafe-inline'` (hay `style` inline de Astro/Tailwind; con hash no se
  cubren atributos). `script-src` **no** lleva `'unsafe-inline'`.
- Astro no hashea los `script is:inline`, así que en `Layout.astro` los scripts de Clarity,
  tema y JSON-LD se construyen como strings y se registran con
  `Astro.csp.insertScriptHash({ hash, kind: 'default' })`. El mismo string se hashea y se
  renderiza con `set:html`, de modo que no pueden desincronizarse.
- Verificación del build: 28 páginas, 160 scripts inline, **0 sin hash** y 0 páginas sin
  metadato CSP. Los 24 JSON-LD parsean como JSON válido.
- Ojo: el meta-CSP no aplica `frame-ancestors` (limitación del estándar); por eso va por cabecera.

## 3. Cabeceras (`vercel.json`)

- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy:
  strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geo/payment/usb),
  `Cross-Origin-Opener-Policy: same-origin`,
  `Strict-Transport-Security: max-age=63072000; includeSubDomains`.
- CSP de cabecera solo con las directivas que no admiten `<meta>`: `frame-ancestors 'none'`,
  `base-uri 'self'`, `object-src 'none'`.
- `/assets/(.*)` → `Access-Control-Allow-Origin: https://www.luistoro.me` para quitar el `*`
  que Vercel pone por defecto.

## 4. Otros

- `src/layouts/Layout.astro`: el JSON-LD escapa `<` como `\u003c` (evita cerrar el `</script>`).
- `public/.well-known/security.txt` (contacto, cadencia en inglés y español, expira 2027).
- Comprobado en producción: sin `.env`, `.git`, `.DS_Store`, source maps, `package.json` ni
  listados de directorio; `PUT` 405; TLS 1.2/1.3; apex y `http://` → 308 a `https://www`.
- **Pendiente manual (DNS, no se puede hacer desde el repo):** añadir en Vercel DNS
  `luistoro.me TXT "v=spf1 -all"` y `_dmarc TXT "v=DMARC1; p=reject; rua=mailto:..."` para
  que nadie pueda falsificar correos `@luistoro.me`. Hoy no hay SPF ni DMARC.

