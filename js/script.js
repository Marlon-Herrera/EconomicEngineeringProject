document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado correctamente");
});

function mostrarInputs() {
    const tipo = document.getElementById("tipoCalculo").value;
    const formulario = document.getElementById("formulario");
    formulario.innerHTML = "";
    document.getElementById('resultado').innerHTML = '';
    
    if (tipo === "interesCompuesto") {
        formulario.innerHTML = `
            <label for="capital">Capital inicial:</label>
            <input type="number" id="capital">
            <label for="tasa">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasa">
            <label for="periodos">Tiempo en años:</label>
            <input class="porcentajes" type="number" id="periodos">
            <label for="periodos">Frecuencia de Capitalización:</label>
            <select class="porcentajes" id="capitalizacion">
                    <option value="365" selected>Diaria</option>
                    <option value="52">Semanal</option>
                    <option value="12">Mensual</option>
                    <option value="4">Trimestral</option>
                    <option value="2">Semestral</option>
                    <option value="1">Anual</option>
            </select>
        `;
    } else if (tipo === "equivalenciaTasa") {
        formulario.innerHTML = `
            <label for="tasaBase">Tasa base (%):</label>
            <input type="number" id="tasaBase">
            <label for="tipoTasa">Tipo de tasa:</label>
            <select id="tipoTasa">
                <option value="NA">Nominal Anual (NA)</option>
                <option value="NM">Nominal Mensual (NM)</option>
                <option value="EA">Efectiva Anual (EA)</option>
                <option value="EM">Efectiva Mensual (EM)</option>
            </select>
        `;
    } else if (tipo === "anualidadOrdinaria") {
        formulario.innerHTML = `
            <label for="capitalAnualidad">Valor presente:</label>
            <input type="number" id="capitalAnualidad">
            <label for="tasaAnualidad">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaAnualidad">
            <label for="periodosAnualidad">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosAnualidad">
        `;
    }else if (tipo === "valorFuturoAnualidad") {
        formulario.innerHTML = `
            <label for="capitalFuturoAnualidad">Valor presente:</label>
            <input type="number" id="capitalFuturoAnualidad">
            <label for="tasaFuturoAnualidad">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaFuturoAnualidad">
            <label for="periodosFuturoAnualidad">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosFuturoAnualidad">
        `;
    } else if (tipo === "anualidadAnticipada") {
        formulario.innerHTML = `
            <label for="capitalAnticipada">Valor presente:</label>
            <input type="number" id="capitalAnticipada">
            <label for="tasaAnticipada">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaAnticipada">
            <label for="periodosAnticipada">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosAnticipada">
        `;
    } else if (tipo === "valorFuturoAnualidadAnticipada") {
        formulario.innerHTML = `
            <label for="capitalFuturoAnticipada">Valor presente:</label>
            <input type="number" id="capitalFuturoAnticipada">
            <label for="tasaFuturoAnticipada">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaFuturoAnticipada">
            <label for="periodosFuturoAnticipada">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosFuturoAnticipada">
        `;
    } else if (tipo === "anualidadDiferida") {
        formulario.innerHTML = `
            <label for="capitalDiferida">Valor presente:</label>
            <input type="number" id="capitalDiferida">
            <label for="tasaDiferida">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaDiferida">
            <label for="periodosDiferida">Número de periodos de pago:</label>
            <input class="porcentajes" type="number" id="periodosDiferida">
            <label for="diferimiento">Diferimiento (número de periodos):</label>
            <input class="porcentajes" type="number" id="diferimiento">
        `;
    }else if (tipo === "tablaAmortizacion") {
        formulario.innerHTML = `
            <label for="capitalAmortizacion">Capital inicial:</label>
            <input type="number" id="capitalAmortizacion">
            <label for="tasaAmortizacion">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaAmortizacion">
            <label for="periodosAmortizacion">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosAmortizacion">
        `;
    } else if (tipo === "tablaCapitalizacion") {
        formulario.innerHTML = `
            <label for="capitalCapitalizacion">Capital inicial:</label>
            <input type="number" id="capitalCapitalizacion">
            <label for="tasaCapitalizacion">Tasa de interés (%):</label>
            <input class="porcentajes" type="number" id="tasaCapitalizacion">
            <label for="periodosCapitalizacion">Número de periodos:</label>
            <input class="porcentajes" type="number" id="periodosCapitalizacion">
        `;
    } else if (tipo === "interesSimple") {
        formulario.innerHTML = `
            <label for="capitalSimple">Capital inicial:</label>
            <input type="number" id="capitalSimple">
            <label for="tasaSimple">Tasa de interés anual (%):</label>
            <input class="porcentajes" type="number" id="tasaSimple">
            <label for="periodosSimple">Periodos:</label>
            <input class="porcentajes" type="number" id="periodosSimple">
            <select class="porcentajes" id="tiempo">
                    <option value="365" selected>Dias</option>
                    <option value="12">Meses</option>
                    <option value="1">Años</option>
            </select>
 
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
    } else if (tipo === "interesSimple") {
        calcularInteresSimple();
    }
}

function calcularInteresCompuesto() {
    let capital = parseFloat(document.getElementById("capital").value);
    let tasa = parseFloat(document.getElementById("tasa").value) / 100;
    let periodos = parseInt(document.getElementById("periodos").value);
    let capitalizacion = parseInt(document.getElementById("capitalizacion").value);
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let montoFinal = capital * Math.pow(1 + tasa/capitalizacion, periodos*capitalizacion);
    document.getElementById("resultado").textContent = `Monto final: ${montoFinal.toFixed(2)}`;
}

function calcularInteresSimple() {
    let capital = parseFloat(document.getElementById("capitalSimple").value);
    let tasa = parseFloat(document.getElementById("tasaSimple").value) / 100;
    let periodos = parseInt(document.getElementById("periodosSimple").value);
    
    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let interesSimple = capital * tasa * periodos/document.getElementById("tiempo").value;
    let montoFinal = capital + interesSimple;
    document.getElementById("resultado").textContent = `Interés simple: ${interesSimple.toFixed(2)}, Monto final: ${montoFinal.toFixed(2)}`;
}

function calcularEquivalenciaTasa() {
    let tasaBase = parseFloat(document.getElementById("tasaBase").value) / 100;
    let tipoTasa = document.getElementById("tipoTasa").value;

    if (isNaN(tasaBase)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese una tasa válida.";
        return;
    }

    let tasaEA, tasaEM, tasaNA, tasaNM;

    if (tipoTasa === "NA") {
        tasaNA = tasaBase * 100;
        tasaNM = (tasaBase / 12) * 100;
        tasaEA = (Math.pow(1 + tasaBase / 12, 12) - 1) * 100;
        tasaEM = (Math.pow(1 + tasaBase / 12, 1) - 1) * 100;
    } else if (tipoTasa === "NM") {
        tasaNA = (tasaBase * 12) * 100;
        tasaNM = tasaBase * 100;
        tasaEA = (Math.pow(1 + tasaBase, 12) - 1) * 100;
        tasaEM = (Math.pow(1 + tasaBase, 1) - 1) * 100;
    } else if (tipoTasa === "EA") {
        tasaNA = (Math.pow(1 + tasaBase, 1 / 12) - 1) * 12 * 100;
        tasaNM = (Math.pow(1 + tasaBase, 1 / 12) - 1) * 100;
        tasaEA = tasaBase * 100;
        tasaEM = (Math.pow(1 + tasaBase, 1 / 12) - 1) * 100;
    } else if (tipoTasa === "EM") {
        tasaNA = (Math.pow(1 + tasaBase, 12) - 1) * 100;
        tasaNM = (Math.pow(1 + tasaBase, 1) - 1) * 100;
        tasaEA = (Math.pow(1 + tasaBase, 12) - 1) * 100;
        tasaEM = tasaBase * 100;
    }

    document.getElementById("resultado").innerHTML = `
        <div class="resultado-tasas">
            <div class="tasa-box"><b>EA</b><br>${tasaEA.toFixed(2)}%</div>
            <div class="tasa-box"><b>NA</b><br>${tasaNA.toFixed(2)}%</div>
            <div class="tasa-box"><b>NM</b><br>${tasaNM.toFixed(2)}%</div>
            <div class="tasa-box"><b>EM</b><br>${tasaEM.toFixed(2)}%</div>
        </div>
    `;
}

function calcularAnualidadOrdinaria() {
    let capital = parseFloat(document.getElementById("capitalAnualidad").value);
    let tasa = parseFloat(document.getElementById("tasaAnualidad").value) / 100;
    let periodos = parseInt(document.getElementById("periodosAnualidad").value);

    if (isNaN(capital) || isNaN(tasa) || isNaN(periodos) || periodos <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let anualidad;

    if (tasa === 0) {
        anualidad = capital / periodos;
    } else {
        anualidad = capital * (tasa / (1 - Math.pow(1 + tasa, -periodos)));
    }

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
    let tasaAnual = parseFloat(document.getElementById("tasaAnticipada").value) / 100;
    let periodos = parseInt(document.getElementById("periodosAnticipada").value);
    
    if (isNaN(capital) || isNaN(tasaAnual) || isNaN(periodos) || periodos <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    // Fórmula corregida para calcular el valor presente de una anualidad anticipada
    let valorPresente = capital * ((1 - Math.pow(1 + tasaAnual, -periodos)) / tasaAnual) * (1 + tasaAnual);

    document.getElementById("resultado").textContent = `Valor presente de la anualidad anticipada: ${valorPresente.toFixed(2)}`;
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
    let numPagos = parseInt(document.getElementById("periodosDiferida").value);
    let diferimiento = parseInt(document.getElementById("diferimiento").value);

    if (isNaN(capital) || isNaN(tasa) || isNaN(numPagos) || isNaN(diferimiento) || numPagos <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let valorPresente = capital * ((1 - Math.pow(1 + tasa, -numPagos)) / tasa) * Math.pow(1 + tasa, -diferimiento);

    document.getElementById("resultado").textContent = `Valor presente de la deuda diferida: ${valorPresente.toFixed(2)}`;
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
let tabla = `
    <div class='table-responsive'>
        <table class='table table-striped table-dark table-hover rounded'>
            <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Saldo</th>
                    <th>Interés</th>
                    <th>Cuota</th>
                    <th>Amortización</th>
                </tr>
            </thead>
            <tbody>
`;


for (let i = 1; i <= periodos; i++) {
    if(i==1){
        tabla += `
        <tr>
            <td>${i-1}</td>
            <td>${capital.toFixed(2)}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    `;
    }
     
    

    let interes = capital * tasa;
    let abono = cuota - interes;
    capital -= abono;

    tabla += `
        <tr>
        
            <td>${i}</td>
            <td>${capital.toFixed(2)}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${abono.toFixed(2)}</td>
        </tr>
    `;
}

tabla += `
            </tbody>
        </table>
    </div>
`;

document.getElementById("resultado").innerHTML = tabla;
}

function calcularTablaCapitalizacion() {
    let saldo = parseFloat(document.getElementById("capitalCapitalizacion").value);
    let tasa = parseFloat(document.getElementById("tasaCapitalizacion").value) / 100;
    let periodos = parseInt(document.getElementById("periodosCapitalizacion").value);
    
    if (isNaN(saldo) || isNaN(tasa) || isNaN(periodos)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let tabla = `
    <div class='table-responsive'>
        <table class='table table-striped table-dark table-hover rounded'>
            <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Saldo</th>
                    <th>Interés</th>
                    <th>Cuota</th>
                    <th>Incremento</th>
                </tr>
            </thead>
            <tbody>
`;
    let incremento = 0;
    let interes = 0;
    let cuota = saldo;
    for (let i = 1; i < periodos; i++) {
        if(i==1){
            tabla += `
            <tr>
                <td>${i}</td>
                <td>${saldo.toFixed(2)}</td>
                <td>-</td>
                <td>${saldo.toFixed(2)}</td>
                <td>${saldo.toFixed(2)}</td>
            </tr>
        `;
        }
        interes = saldo * tasa;
        incremento = cuota+interes;
        saldo += incremento;
        tabla += `
        <tr>
        
            <td>${i+1}</td>
            <td>${saldo.toFixed(2)}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${incremento.toFixed(2)}</td>
        </tr>
    `;
    
}

tabla += `
            </tbody>
        </table>
    </div>
`;

document.getElementById("resultado").innerHTML = tabla;

}
