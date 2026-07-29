# Sitio de Patricia Moreno

## Archivos del sitio

- `index.html` — estructura de la página
- `style.css` — diseño visual
- `data.js` — todo el contenido (textos en FR/EN/ES, piezas, fotos de comisiones). Editar aquí para actualizar textos o agregar piezas.
- `script.js` — lógica: idioma, modal de pieza, render de series
- `robots.txt` — permite explícitamente a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `sitemap.xml` — mapa del sitio para buscadores

## Antes de publicar, reemplaza estos placeholders

1. En `index.html`, busca `VOTRE-DOMAINE.com` (aparece varias veces: canonical, Open Graph, JSON-LD) y `VOTRE-EMAIL@exemple.com` (en el footer), y pon tu dominio real y tu correo real.
2. En `robots.txt` y `sitemap.xml`, reemplaza también `VOTRE-DOMAINE.com` por tu dominio real.
3. Agrega tu CV en PDF en `assets/cv/cv-patricia-moreno.pdf` (el botón de la sección CV ya apunta ahí).
4. Agrega la foto de una comisión ya realizada en `assets/img/commissions/commission-01.jpg`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube estos archivos a la raíz: `index.html`, `style.css`, `data.js`, `script.js`, `robots.txt`, `sitemap.xml`, y la carpeta `assets/`.
3. Ve a **Settings → Pages**, elige la rama `main` y la carpeta `/root`. Guarda.
4. Si tienes dominio propio: **Settings → Pages → Custom domain**, escribe tu dominio. Antes, en tu proveedor de dominio (Gandi, OVH), agrega:
   - 4 registros A apuntando a: 185.199.108.153 / .109.153 / .110.153 / .111.153
   - 1 registro CNAME para `www` apuntando a `tu-usuario.github.io`

## Cómo agregar una pieza nueva

Abre `data.js` y copia un bloque del arreglo `PIECES`, con su id, serie, título, dimensiones, materiales, historia en los tres idiomas, y la ruta de sus fotos. Sube las fotos a `assets/img/<serie>/` con esos mismos nombres.

## SEO y visibilidad en buscadores de IA (ChatGPT, Claude, Perplexity)

Ya aplicado:
- Meta descripción, Open Graph y datos estructurados (JSON-LD, tipo Person) orientados a que los motores entiendan quién eres y qué ofreces.
- `robots.txt` permite explícitamente a los rastreadores de IA.
- Textos con datos concretos (dimensiones, materiales, técnica) en vez de lenguaje de marketing vago, que es lo que estos sistemas prefieren citar.
- La sección de comisiones nombra directamente a los públicos que buscas: particulares, hoteles, despachos de arquitectura, diseñadores de interiores, curadores.

Una limitación real que debes conocer: como el cambio de idioma se hace con JavaScript sin cambiar de URL, los buscadores indexan sobre todo la versión en francés. Si más adelante quieres que el inglés y el español también aparezcan en resultados de búsqueda propios (no solo como opción dentro de la página), lo ideal sería tener tres URLs separadas (por ejemplo `/en/` y `/es/`). Es un cambio de estructura mayor, dime si en algún momento quieres que lo construyamos así.

Pendiente de tu parte, fuera del sitio:
- Enlazar la página desde tu Instagram y cualquier perfil profesional (los enlaces reales desde otros sitios siguen siendo el factor más importante).
- Registrar el sitio en Google Search Console una vez publicado, para acelerar la indexación.
