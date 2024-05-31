function calcularGanancia() {
    const capital = parseFloat(document.getElementById('capital').value);
    const tasaInteres = 0.02;
    const ganancia = capital * tasaInteres;
    document.getElementById('resultadoInversion').innerText = `Ganancia después de un mes: $${ganancia.toFixed(2)}`;
}


function calcularTotal() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const ventas = [
        parseFloat(document.getElementById('venta1').value),
        parseFloat(document.getElementById('venta2').value),
        parseFloat(document.getElementById('venta3').value)
    ];
    const comision = ventas.reduce((acc, venta) => acc + venta * 0.10, 0);
    const total = sueldoBase + comision;
    document.getElementById('resultadoComisiones').innerText = `Comisión: $${comision.toFixed(2)}, Total: $${total.toFixed(2)}`;
}


function calcularDescuento() {
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);
    const descuento = totalCompra * 0.15;
    const precioFinal = totalCompra - descuento;
    document.getElementById('resultadoDescuento').innerText = `Precio final con descuento: $${precioFinal.toFixed(2)}`;
}


function calcularCalificacion() {
    const parciales = [
        parseFloat(document.getElementById('parcial1').value),
        parseFloat(document.getElementById('parcial2').value),
        parseFloat(document.getElementById('parcial3').value)
    ];
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);
    
    const promedioParciales = (parciales.reduce((acc, nota) => acc + nota, 0) / parciales.length) * 0.55;
    const calificacionExamenFinal = examenFinal * 0.30;
    const calificacionTrabajoFinal = trabajoFinal * 0.15;
    
    const calificacionFinal = promedioParciales + calificacionExamenFinal + calificacionTrabajoFinal;
    document.getElementById('resultadoCalificacion').innerText = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
}


function calcularPorcentaje() {
    const numHombres = parseFloat(document.getElementById('numHombres').value);
    const numMujeres = parseFloat(document.getElementById('numMujeres').value);
    const total = numHombres + numMujeres;
    const porcentajeHombres = (numHombres / total) * 100;
    const porcentajeMujeres = (numMujeres / total) * 100;
    document.getElementById('resultadoPorcentaje').innerText = `Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%, Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
}


function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultadoEdad').innerText = `Edad: ${edad} años`;
}
