# Enfermería Eficalidad - Portfolio

Portfolio profesional para Katherine Caviedes, Auxiliar de Enfermería.

## 🚀 Descripción

Sitio web portfolio moderno y responsive que presenta servicios de enfermería, trabajos destacados, paquetes de servicios y testimonios de clientes.

## 📋 Características

- ✨ Diseño moderno y responsive (mobile-first)
- 🎨 Paleta de colores profesional (#7B9FB8, #A8C5DD, #D9E8F5)
- 📱 Navegación suave entre secciones
- 💬 Botón flotante de WhatsApp con mensaje predefinido
- 🖼️ Degradado elegante en imágenes con CSS mask-image
- 📊 Sección de estadísticas de redes sociales
- 💼 Presentación de paquetes de servicios

## 🛠️ Tecnologías

- HTML5
- CSS3 (con Tailwind CSS vía CDN)
- JavaScript (Vanilla)
- Google Fonts (Playfair Display)

## 📦 Estructura del Proyecto

```
tate/
├── index.html          # Página principal
├── style.css           # Estilos personalizados
├── script.js           # JavaScript para interacciones
├── images/
│   └── header.png      # Imagen de perfil principal
└── README.md           # Este archivo
```

## 🚀 Despliegue a Producción

### Opción 1: GitHub Pages (Recomendado)

1. **Asegúrate de que tu repositorio esté actualizado:**
   ```bash
   git add .
   git commit -m "Preparar para producción"
   git push origin main
   ```

2. **Configurar GitHub Pages:**
   - Ve a tu repositorio en GitHub: `https://github.com/amendozaaguiar/enfermeria-eficalidad`
   - Click en **Settings** (Configuración)
   - En el menú lateral, click en **Pages**
   - En **Source**, selecciona la rama `main` y carpeta `/root`
   - Click en **Save**

3. **Tu sitio estará disponible en:**
   ```
   https://amendozaaguiar.github.io/enfermeria-eficalidad/
   ```

### Opción 2: Netlify

1. **Instalar Netlify CLI (opcional):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Desplegar desde la terminal:**
   ```bash
   cd c:\Users\amend\Herd\tate
   netlify deploy --prod
   ```

3. **O arrastra la carpeta directamente en [Netlify Drop](https://app.netlify.com/drop)**

### Opción 3: Vercel

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Desplegar:**
   ```bash
   cd c:\Users\amend\Herd\tate
   vercel --prod
   ```

### Opción 4: Hosting Tradicional (cPanel/FTP)

1. Comprime todos los archivos del proyecto (excepto `.git/`)
2. Sube los archivos a tu servidor vía FTP/cPanel
3. Asegúrate de que `index.html` esté en el directorio raíz público

## 📝 Configuración Personalizada

### Cambiar Número de WhatsApp

Edita en `index.html` línea 461:
```html
href="https://wa.me/573203188169?text=..."
```

### Actualizar Información Personal

- **Nombre:** Línea 60 y 410 en `index.html`
- **Título:** Línea 35 en `index.html`
- **Imagen de perfil:** Reemplaza `images/header.png`

### Modificar Colores del Tema

En `style.css` busca:
- `#7B9FB8` - Color primario azul
- `#A8C5DD` - Color azul claro
- `#D9E8F5` - Color azul muy claro

## 🌐 Dominios Personalizados

### Para GitHub Pages:

1. Crea un archivo `CNAME` en la raíz del proyecto con tu dominio:
   ```
   www.tudominio.com
   ```

2. Configura los DNS de tu dominio:
   - Tipo: `A`
   - Host: `@`
   - Valor: 
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### Para Netlify/Vercel:

Sigue las instrucciones en el dashboard de cada plataforma para configurar dominios personalizados.

## 📱 Pruebas en Dispositivos

Antes de publicar, prueba el sitio en:
- ✅ Chrome DevTools (responsive mode)
- ✅ Dispositivos móviles reales (iOS/Android)
- ✅ Diferentes tamaños de pantalla
- ✅ Conexiones lentas (throttling)

## 🔒 Seguridad y Performance

### Optimizaciones Implementadas:

- ✅ Imágenes optimizadas con Unsplash CDN
- ✅ Fuentes web cargadas con preconnect
- ✅ CSS crítico inline
- ✅ Smooth scrolling nativo
- ✅ Lazy loading de imágenes

### Recomendaciones Adicionales:

- Considera usar un CDN para assets estáticos
- Implementa cache headers en el servidor
- Comprime imágenes antes de subir
- Minifica CSS y JS para producción

## 🐛 Solución de Problemas

### El botón de WhatsApp no aparece:
- Verifica que el z-index sea 9999 en `style.css`
- Revisa que no haya conflictos con otros elementos fixed

### Las imágenes no cargan:
- Verifica las rutas relativas en `index.html`
- Asegúrate de que `images/header.png` existe

### El scroll suave no funciona:
- Verifica que todos los IDs (#social-stats, #videography, etc.) existan
- Comprueba que `scroll-behavior: smooth` esté en CSS

## 📄 Licencia

© 2026 Katherine Caviedes. Todos los derechos reservados.

## 📞 Contacto

- WhatsApp: +57 320 318 8169
- Email: [Tu email]
- Website: [URL después de deployment]

---

**Desarrollado con ❤️ para servicios de enfermería profesional**
