
// Seleccionamos el elemento con el id 'screen'
var screen = document.querySelector('#screen');

// Seleccionamos todos los elementos con la clase 'btn'
var btn = document.querySelectorAll('.btn');

// Seleccionamos el elemento con el id 'eval'
var equal = document.querySelector('#eval');


// Obtenemos el valor de los btn, para eso usamos el bucle for loop

for(item of btn) 
{
  // Agregamos un event listener para cada botón
  item.addEventListener('click',(e) => 
  {
    // Obtenemos el texto del botón
    btntext = e.target.innerText;

    // Si el texto del botón es '×', lo cambiamos a '*'
    if(btntext == '×') 
    {
      btntext = '*';
    }

    // Si el texto del botón es '÷', lo cambiamos a '/'
    if(btntext == '÷') 
    {
       btntext = '/';
    }

    // Agregamos el texto del botón al valor de screen
    screen.value += btntext;
  });
}


// Función para formatear el resultado con comas como separadores de miles

function formatResult(num) 
{
    return num.toLocaleString("en-US");
}



// Agregamos un event listener para el botón de igualdad (Aplicamos la funcion formatResul a las operaciones basicas)
equal.addEventListener('click', () => 
{
    // Evaluamos la expresión en la pantalla
    let result = eval(screen.value);

    // Formateamos el resultado con comas como separadores de miles
    screen.value = formatResult(result);
});



// Función para calcular la raíz cuadrada de un número
function sqrt(x) 
{
    screen.value = formatResult(Math.sqrt(x));
}


// Función para calcular el seno del valor en screen
function sin() 
{
    screen.value = formatResult(Math.sin(screen.value));
}


// Función para calcular el coseno del valor en screen
function cos() 
{
    screen.value = formatResult(Math.cos(screen.value));
}


// Función para calcular la tangente del valor en screen
function tan() 
{
    screen.value = formatResult(Math.tan(screen.value));
}


// Función para elevar al cuadrado el valor en screen
function pow() {
    let value = parseFloat(screen.value);
    let result = Math.pow(value, 2);

    // Verificamos si el resultado es NaN (Not a Number)
    if (isNaN(result)) 
    {
        screen.value = "Error";
    } else 
    {
        // Convertimos el resultado a cadena y luego aplicamos el formato con comas
       result = formatResult(result);

        screen.value = result;
    }
}

// Función para calcular la raíz cuadrada del valor en screen
function sqrt() 
{
    screen.value = formatResult(Math.sqrt(screen.value, 2));
}


// Función para calcular el logaritmo natural del valor en screen
function log() 
{
    screen.value = formatResult(Math.log(screen.value));
}


// Función para asignar el valor de pi a screen
function pi() 
{
    screen.value += formatResult("3.1459265359");
}


// Función para asignar el valor de e a screen
function e() 
{
    screen.value = formatResult(2.71828182846);
}


// Función para calcular el porcentaje de un número
function percent() 
{
    // Obtenemos el valor actual en la pantalla
    let value = parseFloat(screen.value);

    // Calculamos el porcentaje
    let result = value / 100;

    // Formateamos el resultado con comas como separadores de miles
    screen.value = formatResult(result);
}


// Función para calcular el factorial del valor en screen
function fact() 
{
    var i, num, f;

    f = 1

    num = screen.value;

    for(i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    // Asignamos el resultado a screen
    screen.value = formatResult(f);
}


// Función para borrar el último caracter en screen
function backspc() 
{
    // Usamos substr para obtener una subcadena desde el inicio hasta el penúltimo caracter
    screen.value = screen.value.substr(0, screen.value.length -1);
}
