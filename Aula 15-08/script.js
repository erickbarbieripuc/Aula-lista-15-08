function alerta() {
    var conteudo = document.getElementById("exec_01").value;
    alert(conteudo);
}

function valida() {
    var conteudo = document.getElementById("exec_01").value;
    if (conteudo == "Erick") {
        alert("Deu certo!");
    }else{
        alert("Não deu certo!");
    }
}

function getMonthName(mo) {
    mo--;
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "sep", "oct", "Nov", "Dec",
    ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new Error("InvalidMonthNo");
    }
}

function getMes() {
    var myMonth = document.getElementById("exec_02").value;

    if (myMonth < 1 || myMonth > 12) {
        alert("Não vai dar!");
    } else {
        try{
            monthName = getMonthName(myMonth);
            alert(monthName);
        } catch(e) {
            monthName = "desconhecido!"
            alert(monthName);
            console.log(e)
        }
    }
}

function laco() {
    for (var i=0;i<10;i++) {
        console.log(i);
    }
}

function exec_03() {
    const nomes = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const ul = document.getElementById("listaPai");
    
    for (var i=0;i<10;i++) {
        const li = document.createElement("li");
        li.textContent = nomes[i];
        ul.appendChild(li);
    }
}

function exec_04() {
    const nomes = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const select = document.getElementById("listaSelect");
    
    for (var i=0;i<10;i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = nomes[i];
        select.appendChild(option);
    }
}

