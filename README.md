```markdown
# Piedra, Papel, Tijera, Lagarto, Spock

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Una versión moderna y animada del clásico juego de Piedra, Papel y Tijera, extendido con las opciones Lagarto y Spock, popularizado por la serie *The Big Bang Theory*.

## Descripción

Este proyecto es una implementación web del juego "Piedra, Papel, Tijera, Lagarto, Spock" que permite a los jugadores competir contra la CPU en una interfaz intuitiva y visualmente atractiva. El juego incluye animaciones suaves, efectos visuales y un sistema de estadísticas para llevar la cuenta de victorias, derrotas y empates.

## Características

- Interfaz moderna con gradientes y animaciones CSS
- Jugabilidad contra CPU con selección aleatoria
- Sistema de estadísticas en tiempo real
- Efectos visuales para victorias, derrotas y empates
- Tooltips informativos que muestran qué opción vence a cuáles
- Diseño responsive adaptable a diferentes dispositivos
- Soporte para controles de teclado (opcional)
- Función de reinicio de partida (opcional)

## Reglas del Juego

Cada opción puede vencer a otras dos opciones:

- **Piedra** vence a: Tijera y Lagarto
- **Papel** vence a: Piedra y Spock
- **Tijera** vence a: Papel y Lagarto
- **Lagarto** vence a: Papel y Spock
- **Spock** vence a: Piedra y Tijera

### Detalles de las interacciones:
- Piedra aplasta Tijera
- Piedra aplasta Lagarto
- Papel envuelve Piedra
- Papel desautoriza Spock
- Tijera corta Papel
- Tijera decapita Lagarto
- Lagarto devora Papel
- Lagarto envenena Spock
- Spock rompe Tijera
- Spock vaporiza Piedra

## Estructura del Proyecto

```
proyecto-ra-03-lmsgi/
├── index.html              # Página principal del juego
├── estilos.css            # Estilos CSS del proyecto
├── js/
│   └── javascript.js      # Lógica del juego en JavaScript
├── imagenes/
│   └── spock-hand-gesture.svg  # Icono de la pestaña
└── README.md              # Este archivo
```

## Controles

### Ratón
- Haz clic en cualquiera de los 5 botones para realizar tu jugada
- Pasa el ratón sobre los botones para ver un tooltip con información

### Teclado (Opcional)
- `1` - Piedra
- `2` - Papel
- `3` - Tijera
- `4` - Lagarto
- `5` - Spock
- `R` - Reiniciar juego
- `S` - Mostrar reglas en consola

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del proyecto
- **CSS3**: 
  - Variables CSS personalizadas
  - Flexbox y Grid Layout
  - Animaciones y transiciones
  - Gradientes
  - Media queries para responsive design
- **JavaScript (Vanilla)**:
  - Manipulación del DOM
  - Event listeners
  - Lógica del juego
  - Generación aleatoria
  - Control de errores con try/catch

## Funciones Principales

El proyecto implementa las siguientes funciones JavaScript:

- `inicializarJuego()` - Configura el juego y los event listeners
- `jugar(eleccionUsuario)` - Ejecuta una ronda del juego
- `obtenerEleccionCPU()` - Genera la elección aleatoria de la CPU
- `mostrarEleccion(display, eleccion, jugador)` - Muestra las jugadas en pantalla
- `reiniciarDisplays()` - Limpia los displays para una nueva jugada
- `calcularResultadoJugada(usuario, cpu)` - Determina el ganador
- `mostrarResultadoJugada(resultado, usuario, cpu)` - Muestra el resultado visual
- `actualizarContadores()` - Actualiza las estadísticas
- `inicializarTooltips()` - Configura los tooltips informativos

### Funciones Opcionales:
- `mostrarReglas()` - Muestra las reglas en consola
- `resetearJuego()` - Reinicia completamente el juego
- Event listener para controles de teclado

## Paleta de Colores

```css
--primary-color: #6C63FF    /* Púrpura principal */
--secondary-color: #FF6584  /* Rosa secundario */
--accent-color: #36D1DC     /* Cyan acento */
--dark-bg: #1A1A2E          /* Fondo oscuro */
--darker-bg: #16213E        /* Fondo más oscuro */
--card-bg: #0F3460          /* Fondo de tarjetas */
--winner: #4ECDC4           /* Color victoria */
--loser: #FF6B6B            /* Color derrota */
--draw: #FFD166             /* Color empate */
```

## Documentación del Código

El código JavaScript está completamente documentado siguiendo el estándar **Doxygen** con:
- Descripciones detalladas de cada función
- Parámetros de entrada con tipos
- Valores de retorno
- Ejemplos de uso cuando es necesario

## Contexto Académico

Este proyecto fue desarrollado como parte del **Resultado de Aprendizaje 03 (RA03)** del módulo **Lenguajes de Marcas y Sistemas de Gestión de Información** del Ciclo Formativo de Grado Superior en **Desarrollo de Aplicaciones Multiplataforma (DAM)**.

### Criterios de Evaluación Cubiertos:
- CE3a: Identificación de lenguajes de script de cliente
- CE3b: Sintaxis básica de JavaScript
- CE3c: Selección y acceso a elementos del DOM
- CE3d: Creación y modificación de elementos
- CE3e: Eliminación de elementos
- CE3f: Modificación de estilos desde JavaScript

## Autor

**Nelson Filipe Fardilha Karlsson**

Declaro que este proyecto ha sido realizado íntegramente por mí sin el uso de herramientas de Inteligencia Artificial.

## Licencia

Este proyecto es de carácter educativo y fue desarrollado como parte de un proyecto académico.


