let victorias = 0;
let derrotas = 0;
let empates = 0;

const jugadas = 
{
    piedra:"🪨",
    papel:"📄",
    tijera:"✂️",
    lagarto:"🦎",
    spock:"🖖"
};

document.addEventListener('DOMContentLoaded', function()
{
    console.log("DOM cargado - El juego esta listo");
    inicializarJuego();
})

function inicializarJuego()
{

    console.log("Inicializando juego...");
    
    //obtener botones
    const botonPiedra = document.getElementById('piedra');
    const botonPapel = document.getElementById('papel');
    const botonTijera = document.getElementById('tijera');
    const botonLagarto = document.getElementById('lagarto');
    const botonSpock = document.getElementById('spock');

    //evento click
    botonPiedra.addEventListener('click', function()
    {
        jugar('piedra');
    });
        
    botonPapel.addEventListener('click', function()
    {
        jugar('papel');
    });
        
    botonTijera.addEventListener('click', function()
    {
        jugar('tijera');
    });
        
    botonLagarto.addEventListener('click', function()
    {
        jugar('lagarto');
    });
        
    botonSpock.addEventListener('click', function()
    {
        jugar('spock');
    });

    //botones opcionales
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const btnReglas = document.getElementById('btn-reglas');
        
    btnReiniciar.addEventListener('click', function()
    {
        resetearJuego();
    });
        
    btnReglas.addEventListener('click', function()
    {
        mostrarReglas();
    });

    inicializarTooltips();

    const contenedor = document.querySelector('main');
    if (contenedor) 
    {
        contenedor.style.opacity = '1';
    }
}


function jugar(eleccionUsuario)
{
    reiniciarDisplays();

    //obtener elementos
    const displayJugador = document.getElementById('display-jugador');
    const displayCPU = document.getElementById('display-cpu');

    //generar eleccion cpu
    const eleccionCPU = obtenerEleccionCPU();

    //mostrar jugador
    mostrarEleccion(displayJugador, eleccionUsuario, "JUGADOR");

    //mostrar cpu con delay
    setTimeout(function()
    {
        mostrarEleccion(displayCPU, eleccionCPU, "CPU");

        //calcular quien gana
        const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);

        //mostrar resultado
        mostrarResultadoJugada(resultado, eleccionUsuario, eleccionCPU);
    }, 500);
}

function obtenerEleccionCPU()
{
    //numero aleatorio
    const nummeroAleatorio = Math.random();
    const multi = nummeroAleatorio * 5;
    const indice = Math.floor(multi);
    
    let eleccion = "";
    
    switch(indice)
    {
        case 0:
            eleccion = "piedra";
            break;
        case 1:
            eleccion = "papel";
            break;
        case 2:
            eleccion = "tijera";
            break;
        case 3:
            eleccion = "lagarto";
            break;
        case 4:
            eleccion = "spock";
            break;
    }
    
    return eleccion;
}

function mostrarEleccion(display, eleccion, jugador)
{  
    //limpiar display
    display.innerHTML = '';
    display.classList.remove('placeholder');

    //agregar clase
    display.classList.add('active');

    //crear emoji
    const icono = document.createElement('div');
    icono.classList.add('icono-jugada-grande');
    
    switch(eleccion)
    {
        case "piedra":
            icono.textContent = "🪨";
            break;
        case "papel":
            icono.textContent = "📄";
            break;
        case "tijera":
            icono.textContent = "✂️";
            break;
        case "lagarto":
            icono.textContent = "🦎";
            break;
        case "spock":
            icono.textContent = "🖖";
            break;
    }

    //crear texto
    const texto = document.createElement('div');
    texto.classList.add('texto-jugada');

    //mayuscula
    const eleccionMayus = eleccion.charAt(0).toUpperCase() + eleccion.slice(1);

    texto.textContent = eleccionMayus;

    //agregar al display
    display.appendChild(icono);
    display.appendChild(texto);
}

function reiniciarDisplays()
{
    //obtener elementos
    const displayJugador = document.getElementById('display-jugador');
    const displayCPU = document.getElementById('display-cpu');
    const mensaje = document.getElementById('mensaje-resultado');

    //limpiar
    displayJugador.innerHTML = '?';
    displayCPU.innerHTML = '?';
    
    displayJugador.classList.add('placeholder');
    displayCPU.classList.add('placeholder');

    //quitar active
    displayJugador.classList.remove('active');
    displayCPU.classList.remove('active');

    //resetear mensaje
    mensaje.textContent = '¡Batalla!';
    mensaje.classList.remove('ganador');
    mensaje.classList.remove('perdedor');
    mensaje.classList.remove('empate');
}


function calcularResultadoJugada(usuario, cpu)
{
    //empate
    if(usuario === cpu)
    {
        return "empate";
    }

    let resultado = "";
    
    switch(usuario)
    {
        case "piedra":
            if(cpu === "tijera" || cpu === "lagarto")
            {
                resultado = "victoria";
            }
            else
            {
                resultado = "derrota";
            }
            break;
            
        case "papel":
            if(cpu === "piedra" || cpu === "spock")
            {
                resultado = "victoria";
            }
            else
            {
                resultado = "derrota";
            }
            break;
            
        case "tijera":
            if(cpu === "papel" || cpu === "lagarto")
            {
                resultado = "victoria";
            }
            else
            {
                resultado = "derrota";
            }
            break;
            
        case "lagarto":
            if(cpu === "papel" || cpu === "spock")
            {
                resultado = "victoria";
            }
            else
            {
                resultado = "derrota";
            }
            break;
            
        case "spock":
            if(cpu === "piedra" || cpu === "tijera")
            {
                resultado = "victoria";
            }
            else
            {
                resultado = "derrota";
            }
            break;
    }
    
    return resultado;
}

function mostrarResultadoJugada(resultado, usuario, cpu)
{
    const mensaje = document.getElementById('mensaje-resultado');

    //quitar clases
    mensaje.classList.remove('ganador');
    mensaje.classList.remove('perdedor');
    mensaje.classList.remove('empate');

    //convertir a mayuscula
    const usuarioMayus = usuario.charAt(0).toUpperCase() + usuario.slice(1);
    const cpuMayus = cpu.charAt(0).toUpperCase() + cpu.slice(1);

    if (resultado === "victoria")
    {
        mensaje.textContent = `¡Ganastes! ${usuarioMayus} vence a ${cpuMayus}`;
        mensaje.classList.add('ganador');
        victorias++;
    }
    else if (resultado === "derrota")
    {
        mensaje.textContent = `Perdistes. ${cpuMayus} vence a ${usuarioMayus}`;
        mensaje.classList.add('perdedor');
        derrotas++;
    }
    else
    {
        mensaje.textContent = `¡Empate! Ambos eligieron ${usuarioMayus}`;
        mensaje.classList.add('empate');
        empates++;
    }

    actualizarContadores();
}

function actualizarContadores()
{
    //actualizar
    const elemVictorias = document.getElementById('victorias');
    const elemDerrotas = document.getElementById('derrotas');
    const elemEmpates = document.getElementById('empates');
    
    elemVictorias.textContent = victorias;
    elemDerrotas.textContent = derrotas;
    elemEmpates.textContent = empates;
}

function inicializarTooltips()
{
    //obtener botones
    const btnPiedra = document.getElementById('piedra');
    const btnPapel = document.getElementById('papel');
    const btnTijera = document.getElementById('tijera');
    const btnLagarto = document.getElementById('lagarto');
    const btnSpock = document.getElementById('spock');
    
    //poner tooltips
    btnPiedra.title = "Piedra vence a: Tijera y Lagarto";
    btnPapel.title = "Papel vence a: Piedra y Spock";
    btnTijera.title = "Tijera vence a: Papel y Lagarto";
    btnLagarto.title = "Lagarto vence a: Papel y Spock";
    btnSpock.title = "Spock vence a: Piedra y Tijera";
}

function mostrarReglas()
{
    console.log("REGLAS DEL JUEGO: Piedra, Papel, Tijera, Lagarto, Spock");
    console.log("");
    console.log("🪨 PIEDRA vence a:");
    console.log("   - ✂️  Tijera (aplasta)");
    console.log("   - 🦎 Lagarto (aplasta)");
    console.log("");
    console.log("📄 PAPEL vence a:");
    console.log("   - 🪨 Piedra (envuelve)");
    console.log("   - 🖖 Spock (desautoriza)");
    console.log("");
    console.log("✂️  TIJERA vence a:");
    console.log("   - 📄 Papel (corta)");
    console.log("   - 🦎 Lagarto (decapita)");
    console.log("");
    console.log("🦎 LAGARTO vence a:");
    console.log("   - 📄 Papel (devora)");
    console.log("   - 🖖 Spock (envenena)");
    console.log("");
    console.log("🖖 SPOCK vence a:");
    console.log("   - ✂️  Tijera (rompe)");
    console.log("   - 🪨 Piedra (vaporiza)");
    console.log("");
}

function resetearJuego()
{
    //poner a 0 los contadores
    victorias = 0;
    derrotas = 0;
    empates = 0;
    
    actualizarContadores();
    reiniciarDisplays();
    
    const mensaje = document.getElementById('mensaje-resultado');
    if(mensaje)
    {
        mensaje.textContent = '¡Juego reiniciado!';
        mensaje.classList.remove('ganador');
        mensaje.classList.remove('perdedor');
        mensaje.classList.remove('empate');
        mensaje.textContent = '¡Batalla!';
    }
    
    console.log("Juego reiniciado correctamente");
}

document.addEventListener('keydown', function(event) {
    const tecla = event.key.toLowerCase();
    
    //detectar tecla
    switch(tecla)
    {
        case '1':
            jugar('piedra');
            break;
        case '2':
            jugar('papel');
            break;
        case '3':
            jugar('tijera');
            break;  
        case '4':
            jugar('lagarto');
            break;
        case '5':
            jugar('spock');
            break;
        case 'r':
            resetearJuego();
            break;
        case 's':
            mostrarReglas();
            break;
    }
});