🧠 Arquitectura de Componentes
La aplicación está diseñada bajo el principio de Component Composition (Composición de Componentes), donde los datos fluyen de manera unidireccional de arriba hacia abajo, desde App.jsx a sus hijos.

Flujo de Datos (Props)
App.jsx (Contenedor): Define el Array de objetos perros (la fuente de verdad) y utiliza Array.prototype.map() para iterar y renderizar dinámicamente cuatro instancias del componente MyCard.

MyCard.jsx (Presentación): Recibe las propiedades de un perro (como image, name, y description) directamente desde App.jsx.

Tags.jsx (Reutilizable): Recibe las propiedades de estilo y texto (text y bgColor) desde MyCard.jsx, permitiendo un cambio de color dinámico para cada etiqueta.
📂 Estructura del Proyecto

El proyecto sigue una estructura de componentes clara y modular:

adopta-un-perrito/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Muestra el título
│   │   ├── MyCard.jsx       # Tarjeta de perrito (Elemento de la galería)
│   │   ├── Tags.jsx         # Etiqueta de raza dinámica
│   │   └── Footer.jsx       # Pie de página
│   ├── App.jsx            # Contenedor principal y gestión de datos (Array de perritos)
│   └── App.css            # Estilos globales y clases de utilidad
├── public/
│   └── vite.svg
├── index.html
└── package.json