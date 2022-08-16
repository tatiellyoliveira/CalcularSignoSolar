function verificar() {
    var mes = document.getElementById("mes").value
    var dia = document.getElementById("dia").value
    var res = document.getElementById("res")
   
    if (mes == 1 && dia <= 20 || mes == 12 && dia >= 22) {
        res.innerHTML = `Sol em Capricórnio`
    }
    else if (mes == 1 && dia >= 21 || mes == 2 && dia <= 18) {
        res.innerHTML = `Sol em Aquário`
    }
    else if (mes == 2 && dia >= 19 || mes == 3 && dia <= 20) {
        res.innerHTML = `Sol em Peixes`
    }
    else if (mes == 3 && dia >= 21 || mes == 4 && dia <= 20) {
        res.innerHTML = `Sol em Áries`
    }
    else if (mes == 4 && dia >= 21 || mes == 5 && dia <= 20) {
        res.innerHTML = `Sol em Touro`
    }
    else if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20) {
        res.innerHTML = `Sol em Gêmeos`
    }
    else if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22) {
        res.innerHTML = `Sol em Câncer`
    }
    else if (mes == 7 && dia >= 23 || mes == 8 && dia <= 22) {
        res.innerHTML = `Sol em Leão`
    }
    else if (mes == 8 && dia >= 23 || mes == 9 && dia <= 22) {
        res.innerHTML = `Sol em Virgem`
    }
    else if (mes == 9 && dia >= 23 || mes == 10 && dia <= 22) {
        res.innerHTML = `Sol em Libra`
    }
    else if (mes == 10 && dia >= 23 || mes == 11 && dia <= 21) {
        res.innerHTML = `Sol em Escorpião`
    }
    else if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21) {
        res.innerHTML = `Sol em Sagitário`
    }
}