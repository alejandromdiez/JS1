function iniciarCotizador () {

let cotizacion = 0;
let tipoSeguro = "";
let tipoCobertura = "";
let membresia = "";


   const nombre = prompt ("Bienvenido a nuestro cotizador de seguros online. Vamos a comenzar seleccionando el tipo de seguro buscado. Indicanos tu nombre para darte de alta en nuestra base de datos");

   let primerpregunta;
   while (true) {
    primerpregunta = prompt (`
    ¿Que seguro desea cotizar?
    1- Auto
    2- Moto
    3- Camioneta`);
    if (primerpregunta == 1) {
        cotizacion += 1000;
        tipoSeguro = "Auto";
        alert ("Has seleccionado seguro para tu auto");
        break;        
    } else if (primerpregunta == 2) {
        cotizacion += 500;
        tipoSeguro = "Moto";
        alert ("Has seleccionado seguro para tu moto");
        break;
    } else if (primerpregunta == 3) {
        cotizacion += 2000;
        tipoSeguro = "Camioneta";
        alert ("Has seleccionado seguro para tu camioneta");
        break;

    } else {
        alert("Opción no válida. Por favor, selecciona una opción correcta (1, 2 o 3).");
    }
    }
    let segundapregunta;
    while (true) {
        segundapregunta = prompt (`Elija el tipo de seguro a cotizar
        1- Responsabilidad Civil
        2- Robo Total
        3- Incendio Total`);
        if (segundapregunta == 1) {
            cotizacion += 500;
            tipoCobertura = "Responsabilidad Civil";
        alert ("Has seleccionado seguro " + tipoCobertura + " para tu " + tipoSeguro);
        break;
        } else if (segundapregunta == 2) {
            cotizacion += 1500;
            tipoCobertura = "Robo Total";
            alert ("Has seleccionado seguro contra " + tipoCobertura + " para tu " + tipoSeguro);
            break;
        } else if (segundapregunta == 3) {
            cotizacion += 1000;
            tipoCobertura = "Incendio Total";
            alert ("Has seleccionado seguro contra " + tipoCobertura + " para tu " + tipoSeguro);
            break;
        } else {
            alert("Opción no válida. Por favor, selecciona una opción correcta (1, 2 o 3).");
        }
    }

    let tercerapregunta;
    while (true) {
        tercerapregunta = prompt(`
        Ahora debes seleccionar tu membresia
        1- Standard
        2- Premium
        3- Platinum`);

        if (tercerapregunta == 1){
            cotizacion += 500;
            membresia = "Standard";
            alert ("El seguro standard solo incluye la cobertura básica seleccionada");
            break;
        } else if (tercerapregunta == 2) {
            cotizacion += 1000;
            membresia = "Premium";
            alert ("El seguro Premium incluye membresia de descuento para nuestros clientes en comercios adheridos");
            break;
        } else if (tercerapregunta == 3) {
            cotizacion += 2000;
            membresia = "Platinum";
            alert ("El seguro Platinum ofrece los beneficios de la Premium con servicio de grua y traslado de pasajeros sin costo hasta 500km ante cualquier inconveniente. Es una excelente elección por el bajo costo");
            break;
        } else {
            alert("Opción no válida. Por favor, selecciona una opción correcta (1, 2 o 3).");
        
        }
    }
    
    alert("El costo total de tu cotizacion de nuestros servicios para tu " + tipoSeguro + " con cobertura " + tipoCobertura + " y membresía " + membresia + " es de $" + cotizacion + ". Excelente elección " + nombre + ". Bienvenido a nuestra compañía!");


}

iniciarCotizador ()