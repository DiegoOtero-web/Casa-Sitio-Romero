# Casa Sito Romero — Landing

Proyecto exportado desde Lovable (TanStack Start + React + Tailwind).

## 📸 Dónde están las imágenes (para cambiarlas)

Todo el contenido visual vive en **`src/routes/index.tsx`**, líneas 4–13:

```tsx
import steak from "@/assets/food/IMG_5177.jpg.asset.json";      // foto del Hero (portada)
import artichoke from "@/assets/food/IMG_5179.jpg.asset.json";  // galería de reseñas
import fish from "@/assets/food/IMG_5180.jpg.asset.json";       // galería de reseñas
import iberico from "@/assets/food/IMG_5182.jpg.asset.json";    // sección "La casa" (foto grande)
import goatCheese from "@/assets/food/IMG_5186.jpg.asset.json"; // galería de reseñas
import migas from "@/assets/food/IMG_5187.jpg.asset.json";      // sección "La casa"
import beers from "@/assets/food/IMG_5188.jpg.asset.json";      // sección "La casa"
import cannelloni from "@/assets/food/IMG_5189.jpg.asset.json"; // galería de reseñas
import flamenquin from "@/assets/food/IMG_5191.jpg.asset.json"; // galería de reseñas
import anchoas from "@/assets/food/IMG_5192.jpg.asset.json";    // galería de reseñas
```

Cada archivo `.asset.json` en `src/assets/food/` apunta a la imagen real alojada en el
CDN interno de Lovable (`/__l5e/assets-v1/...`). **Esas rutas solo funcionan dentro de
Lovable** — si despliegas fuera (Vercel, Netlify, etc.) sin cambiarlas, las fotos no
se verán.

**Forma más simple de sustituirlas:** en vez de mantener el sistema `.asset.json`,
sustituye cada import por una imagen normal:

1. Pon tus fotos nuevas en `src/assets/food/` (ej. `steak.jpg`).
2. Cambia el import:
   ```tsx
   import steak from "@/assets/food/steak.jpg";
   ```
3. Usa `steak` directamente como string de la URL (en vez de `steak.url`) en cada
   `<img src={...} />` — busca `.url` en `index.tsx` y quítalo donde uses tus propias
   imágenes.

## ⚠️ Aviso importante sobre el despliegue

Este proyecto usa `@lovable.dev/vite-tanstack-config` en `devDependencies`
(`package.json`) y `vite.config.ts`. Es un paquete **privado de Lovable** — fuera de su
plataforma, `npm install` probablemente fallará al no encontrarlo.

Antes de subir esto a GitHub/Vercel, lo más sencillo es sustituir `vite.config.ts` por
una configuración estándar de Vite + TanStack Start + Tailwind (sin ese paquete), o
pedirme que te lo prepare cuando vayas a hacer el despliegue.

## Scripts

```bash
npm install
npm run dev      # desarrollo local
npm run build    # build de producción
```
