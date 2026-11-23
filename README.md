# Ecosistemas de México — Vista Explotada (Editorial UI)

Proyecto web totalmente visual inspirado en el diseño editorial **60% Marfil Antiguo (`#EAE4D7`) / 30% Negro Piano (`#151515`) / 10% acentos minerales y botánicos (`#6E685C`, `#4A5844`)**, con diagramas isométricos en vista explotada de **4 estratos** para los **6 principales ecosistemas de México**.

## Estructura del Proyecto

```text
ecosistemas-mexico/
├── index.html                        # Versión directa lista para abrir en Visual Studio Code (Live Server o navegador)
├── routes/
│   └── web.php                       # Ruta estática para Laravel sin base de datos ni backend
├── resources/
│   └── views/
│       └── ecosistemas.blade.php     # Plantilla Blade lista para copiar a un proyecto Laravel
└── public/
    ├── css/
    │   └── ecosistemas.css           # Sistema visual 60-30-10, tipografía editorial y responsividad
    └── js/
        └── ecosistemas.js            # Datos botánicos/faunísticos, SVGs isométricos de 4 capas e interactividad
```

## Cómo usar en Visual Studio Code (VS Code)

### Opción A: Vista inmediata sin servidor PHP
1. Abre la carpeta `ecosistemas-mexico` en **Visual Studio Code**.
2. Abre `index.html` con la extensión **Live Server** (clic derecho -> *Open with Live Server*) o arrástralo directamente a tu navegador.

### Opción B: Integración visual en Laravel (sin BD ni Composer)
1. Copia `resources/views/ecosistemas.blade.php` dentro de la carpeta `resources/views/` de tu instalación Laravel.
2. Copia `public/css/ecosistemas.css` y `public/js/ecosistemas.js` dentro de `public/css/` y `public/js/`.
3. Agrega la ruta visual en `routes/web.php`:
   ```php
   Route::view('/ecosistemas', 'ecosistemas')->name('ecosistemas.index');
   ```
4. Inicia el servidor local (`php artisan serve`) y entra a `http://127.0.0.1:8000/ecosistemas`.

## Controles Interactivos
- **Flechas de teclado (`←` / `→`)** o botones inferiores: Cambiar entre los 6 ecosistemas mexicanos.
- **Botón `Vista Explotada / Compactar`**: Separar o acoplar dinámicamente los 4 estratos isométricos del ecosistema.
- **Hover / Clic sobre `01`–`07`**: Resalta el estrato correspondiente en el diagrama y despliega la ficha detallada de fauna, flora o clima.
