document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado correctamente");
});

function mostrarInputs() {
    const tipo = document.getElementById("tipoCalculo").value;
    const formulario = document.getElementById("formulario");
    formulario.innerHTML = "";
    
    if (tipo === "interesCompuesto") {
        formulario.innerHTML = `
            <label for="capital">Capital inicial:</label>
            <input type="number" id="capital">
            <label for="tasa">Tasa de interés (%):</label>
            <input type="number" id="tasa">
            <label for="periodos">Número de periodos:</label>
            <input type="number" id="periodos">
        `;
    } else if (tipo === "equivalenciaTasa") {
        formulario.innerHTML = `
            <label for="tasaAnual">Tasa anual (%):</label>
            <input type="number" id="tasaAnual">
            <label for="periodosTasa">Número de periodos por año:</label>
            <input type="number" id="periodosTasa">
        `;
    } else if (tipo === "anualidadOrdinaria") {
        formulario.innerHTML = `
            <label for="capitalAnualidad">Valor presente:</label>
            <input type="number" id="capitalAnualidad">
            <label for="tasaAnualidad">Tasa de interés (%):</label>
            <input type="number" id="tasaAnualidad">
            <label for="periodosAnualidad">Número de periodos:</label>
            <input type="number" id="periodosAnualidad">
        `;
    } else if (tipo === "valorFuturoAnualidad") {
        formulario.innerHTML = `
            <label for="capitalFuturoAnualidad">Valor presente:</label>
            <input type="number" id="capitalFuturoAnualidad">
            <label for="tasaFuturoAnualidad">Tasa de interés (%):</label>
            <input type="number" id="tasaFuturoAnualidad">
            <label for="periodosFuturoAnualidad">Número de periodos:</label>
            <input type="number" id="periodosFuturoAnualidad">
        `;
    } else if (tipo === "anualidadAnticipada") {
        formulario.innerHTML = `
            <label for="capitalAnticipada">Valor presente:</label>
            <input type="number" id="capitalAnticipada">
            <label for="tasaAnticipada">Tasa de interés (%):</label>
            <input type="number" id="tasaAnticipada">
            <label for="periodosAnticipada">Número de periodos:</label>
            <input type="number" id="periodosAnticipada">
        `;
    } else if (tipo === "valorFuturoAnualidadAnticipada") {
        formulario.innerHTML = `
            <label for="capitalFuturoAnticipada">Valor presente:</label>
            <input type="number" id="capitalFuturoAnticipada">
            <label for="tasaFuturoAnticipada">Tasa de interés (%):</label>
            <input type="number" id="tasaFuturoAnticipada">
            <label for="periodosFuturoAnticipada">Número de periodos:</label>
            <input type="number" id="periodosFuturoAnticipada">
        `;
    } else if (tipo === "anualidadDiferida") {
        formulario.innerHTML = `
            <label for="capitalDiferida">Valor presente:</label>
            <input type="number" id="capitalDiferida">
            <label for="tasaDiferida">Tasa de interés (%):</label>
            <input type="number" id="tasaDiferida">
            <label for="periodosDiferida">Número de periodos:</label>
            <input type="number" id="periodosDiferida">
        `;
    } else if (tipo === "tablaAmortizacion") {
        formulario.innerHTML = `
            <label for="capitalAmortizacion">Capital inicial:</label>
            <input type="number" id="capitalAmortizacion">
            <label for="tasaAmortizacion">Tasa de interés (%):</label>
            <input type="number" id="tasaAmortizacion">
            <label for="periodosAmortizacion">Número de periodos:</label>
            <input type="number" id="periodosAmortizacion">
        `;
    } else if (tipo === "tablaCapitalizacion") {
        formulario.innerHTML = `
            <label for="capitalCapitalizacion">Capital inicial:</label>
            <input type="number" id="capitalCapitalizacion">
            <label for="tasaCapitalizacion">Tasa de interés (%):</label>
            <input type="number" id="tasaCapitalizacion">
            <label for="periodosCapitalizacion">Número de periodos:</label>
            <input type="number" id="periodosCapitalizacion">
        `;
    }
}

function calcular() {
    const tipo = document.getElementById("tipoCalculo").value;
    
    if (tipo === "interesCompuesto") {
        calcularInteresCompuesto();
    } else if (tipo === "equivalenciaTasa") {
        calcularEquivalenciaTasa();
    } else if (tipo === "anualidadOrdinaria") {
        calcularAnualidadOrdinaria();
    } else if (tipo === "valorFuturoAnualidad") {
        calcularValorFuturoAnualidad();
    } else if (tipo === "anualidadAnticipada") {
        calcularAnualidadAnticipada();
    } else if (tipo === "valorFuturoAnualidadAnticipada") {
        calcularValorFuturoAnualidadAnticipada();
    } else if (tipo === "anualidadDiferida") {
        calcularAnualidadDiferida();
    } else if (tipo === "tablaAmortizacion") {
        calcularTablaAmortizacion();
    } else if (tipo === "tablaCapitalizacion") {
        calcularTablaCapitalizacion();
    }
}

function calcularInteresCompuesto() {
    let capital = parseFloat(document.getElementById("capital").value);
    let tasa = parseFloat(document.getElementById("tasa").value) / 100;
    let periodos = parseInt(document.getElementById("periodos").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let montoFinal = capital * Math.pow(1 + tasa, periodos);
    document.getElementById("resultado").textContent = `Monto final: ${montoFinal.toFixed(2)}`;
}

function calcularEquivalenciaTasa() {
    let tasaAnual = parseFloat(document.getElementById("tasaAnual").value) / 100;
    let periodosTasa = parseInt(document.getElementById("periodosTasa").value);
    
    if (isNaN(tasaAnual) || isNaN(periodosTasa)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let tasaEquivalente = Math.pow(1 + tasaAnual, 1 / periodosTasa) - 1;
    document.getElementById("resultado").textContent = `Tasa equivalente: ${(tasaEquivalente * 100).toFixed(2)}%`;
}

function calcularAnualidadOrdinaria() {
    let capital = parseFloat(document.getElementById("capitalAnualidad").value);
    let tasa = parseFloat(document.getElementById("tasaAnualidad").value) / 100;
    let periodos = parseInt(document.getElementById("periodosAnualidad").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let anualidad = capital * (tasa / (1 - Math.pow(1 + tasa, -periodos)));
    document.getElementById("resultado").textContent = `Valor de la anualidad: ${anualidad.toFixed(2)}`;
}

function calcularValorFuturoAnualidad() {
    let capital = parseFloat(document.getElementById("capitalFuturoAnualidad").value);
    let tasa = parseFloat(document.getElementById("tasaFuturoAnualidad").value) / 100;
    let periodos = parseInt(document.getElementById("periodosFuturoAnualidad").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let valorFuturo = capital * (Math.pow(1 + tasa, periodos) - 1) / tasa;
    document.getElementById("resultado").textContent = `Valor futuro: ${valorFuturo.toFixed(2)}`;
}

function calcularAnualidadAnticipada() {
    let capital = parseFloat(document.getElementById("capitalAnticipada").value);
    let tasa = parseFloat(document.getElementById("tasaAnticipada").value) / 100;
    let periodos = parseInt(document.getElementById("periodosAnticipada").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let anualidadAnticipada = capital * (tasa / (1 - Math.pow(1 + tasa, -periodos))) * (1 + tasa);
    document.getElementById("resultado").textContent = `Valor de la anualidad anticipada: ${anualidadAnticipada.toFixed(2)}`;
}

function calcularValorFuturoAnualidadAnticipada() {
    let capital = parseFloat(document.getElementById("capitalFuturoAnticipada").value);
    let tasa = parseFloat(document.getElementById("tasaFuturoAnticipada").value) / 100;
    let periodos = parseInt(document.getElementById("periodosFuturoAnticipada").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let valorFuturoAnticipada = capital * (Math.pow(1 + tasa, periodos) - 1) / tasa * (1 + tasa);
    document.getElementById("resultado").textContent = `Valor futuro anticipado: ${valorFuturoAnticipada.toFixed(2)}`;
}

function calcularAnualidadDiferida() {
    let capital = parseFloat(document.getElementById("capitalDiferida").value);
    let tasa = parseFloat(document.getElementById("tasaDiferida").value) / 100;
    let periodos = parseInt(document.getElementById("periodosDiferida").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let anualidadDiferida = capital * (tasa / (1 - Math.pow(1 + tasa, -periodos))) * Math.pow(1 + tasa, -periodos);
    document.getElementById("resultado").textContent = `Valor de la anualidad diferida: ${anualidadDiferida.toFixed(2)}`;
}

function calcularTablaAmortizacion() {
    let capital = parseFloat(document.getElementById("capitalAmortizacion").value);
    let tasa = parseFloat(document.getElementById("tasaAmortizacion").value) / 100;
    let periodos = parseInt(document.getElementById("periodosAmortizacion").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let cuota = capital * (tasa / (1 - Math.pow(1 + tasa, -periodos)));
    let tabla = "";
    
    for (let i = 1; i <= periodos; i++) {
        let interes = capital * tasa;
        let abono = cuota - interes;
        capital -= abono;
        
        tabla += `
            <p>Periodo ${i}: Cuota = ${cuota.toFixed(2)}, Interés = ${interes.toFixed(2)}, Abono = ${abono.toFixed(2)}, Saldo = ${capital.toFixed(2)}</p>
        `;
    }
    
    document.getElementById("resultado").innerHTML = tabla;
}

function calcularTablaCapitalizacion() {
    let capital = parseFloat(document.getElementById("capitalCapitalizacion").value);
    let tasa = parseFloat(document.getElementById("tasaCapitalizacion").value) / 100;
    let periodos = parseInt(document.getElementById("periodosCapitalizacion").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let tabla = `Capital inicial: ${capital}<br><br>`;
    
    for (let i = 1; i <= periodos; i++) {
        capital += capital * tasa;
        tabla += `Periodo ${i}: ${capital.toFixed(2)}<br>`;
    }
    
    document.getElementById("resultado").innerHTML = tabla;
}
