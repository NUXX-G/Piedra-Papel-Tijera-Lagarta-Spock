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
    inicializarJuego();
})

function inicializarJuego()
{    
    const botonPiedra = document.getElementById('piedra');
    const botonPapel = document.getElementById('papel');
    const botonTijera = document.getElementById('tijera');
    const botonLagarto = document.getElementById('lagarto');
    const botonSpock = document.getElementById('spock');

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

    setTimeout(() => 
    {
        const contenedor = document.querySelector('main');
        if (contenedor) contenedor.style.opacity = '1';
    }, 100);
}


function jugar(eleccionUsuario)
{
    reiniciarDisplays();

    const displayJugador = document.getElementById('display-jugador');
    const displayCPU = document.getElementById('display-cpu');

    const eleccionCPU = obtenerEleccionCPU();

    mostrarEleccion(displayJugador, eleccionUsuario, "JUGADOR");

    setTimeout(function()
    {
        mostrarEleccion(displayCPU, eleccionCPU, "CPU");

        const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);

        mostrarResultadoJugada(resultado, eleccionUsuario, eleccionCPU);
    }, 500);
}

function obtenerEleccionCPU()
{
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
    display.innerHTML = '';
    display.classList.remove('placeholder');

    display.classList.add('active');

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

    const texto = document.createElement('div');
    texto.classList.add('texto-jugada');

    const eleccionMayus = eleccion.charAt(0).toUpperCase() + eleccion.slice(1);

    texto.textContent = eleccionMayus;

    display.appendChild(icono);
    display.appendChild(texto);
}

function reiniciarDisplays()
{
    const displayJugador = document.getElementById('display-jugador');
    const displayCPU = document.getElementById('display-cpu');
    const mensaje = document.getElementById('mensaje-resultado');

    displayJugador.innerHTML = '?';
    displayCPU.innerHTML = '?';
    
    displayJugador.classList.add('placeholder');
    displayCPU.classList.add('placeholder');

    displayJugador.classList.remove('active');
    displayCPU.classList.remove('active');

    mensaje.textContent = 'Batalla';
    mensaje.classList.remove('ganador');
    mensaje.classList.remove('perdedor');
    mensaje.classList.remove('empate');
}


function calcularResultadoJugada(usuario, cpu)
{
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

    mensaje.classList.remove('ganador');
    mensaje.classList.remove('perdedor');
    mensaje.classList.remove('empate');

    const usuarioMayus = usuario.charAt(0).toUpperCase() + usuario.slice(1);
    const cpuMayus = cpu.charAt(0).toUpperCase() + cpu.slice(1);

    if (resultado === "victoria")
    {
        mensaje.textContent = `Ganastes ${usuarioMayus} vence a ${cpuMayus}`;
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
        mensaje.textContent = `Empate Ambos eligieron ${usuarioMayus}`;
        mensaje.classList.add('empate');
        empates++;
    }

    actualizarContadores();
}

function actualizarContadores()
{
    const elemVictorias = document.getElementById('victorias');
    const elemDerrotas = document.getElementById('derrotas');
    const elemEmpates = document.getElementById('empates');
    
    elemVictorias.textContent = victorias;
    elemDerrotas.textContent = derrotas;
    elemEmpates.textContent = empates;
}

function inicializarTooltips()
{
    const btnPiedra = document.getElementById('piedra');
    const btnPapel = document.getElementById('papel');
    const btnTijera = document.getElementById('tijera');
    const btnLagarto = document.getElementById('lagarto');
    const btnSpock = document.getElementById('spock');
    
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
    console.log("PIEDRA gana a:");
    console.log("-Tijera");
    console.log("-Lagarto");
    console.log("");
    console.log("PAPEL gana a:");
    console.log("-Piedra");
    console.log("-Spock");
    console.log("");
    console.log("TIJERA gana a:");
    console.log("-Papel");
    console.log("-Lagarto");
    console.log("");
    console.log("LAGARTO gana a:");
    console.log("-Papel");
    console.log("-Spock");
    console.log("");
    console.log("SPOCK gana a:");
    console.log("-Tijera");
    console.log("-Piedra");
}

function resetearJuego()
{
    victorias = 0;
    derrotas = 0;
    empates = 0;
    
    actualizarContadores();
    reiniciarDisplays();
    
    const mensaje = document.getElementById('mensaje-resultado');
    if(mensaje)
    {
        mensaje.textContent = 'Juego reiniciado';
        mensaje.classList.remove('ganador');
        mensaje.classList.remove('perdedor');
        mensaje.classList.remove('empate');
        mensaje.textContent = 'Batalla';
    }
}

document.addEventListener('keydown', function(event) 
{
    const tecla = event.key.toLowerCase();
    
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