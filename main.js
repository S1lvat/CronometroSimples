var hh = 0;
var mm = 0;
var ss = 0;
var iD;
var cont = false // Será utilizada para evitar que dois comandos sejam dados ao mesmo tempo! Se true: existe um processo rodando, se false: não há processo.

// função utilizada para setar os valores do temporizador!
function setValues(){
    if(cont == false){    
        
        var impH = document.getElementById('hh')
        var impM = document.getElementById('mm')
        var impS = document.getElementById('ss')
        
        if(impH || impM || impS){
            hh = (!impH.value)?0:impH.value
            mm = (!impM.value)?0:impM.value
            ss = (!impS.value)?0:impS.value

            impH.value = ''
            impM.value = ''
            impS.value = ''
        }
        console.log(hh, mm , ss)
    }
}

function inicio(e) {
    if(cont == true){
        alert("pressione o botão Parar!")
    }
    if(cont == false){   
        iD = setInterval(() => { timer(e) }, 1000)
        cont = true
    }

    if(e == false && !hh && !mm && !ss){
        cont = false
        clearInterval(iD)
        alert('Insira os valores de tempo!')
    }
    
}

function pause() {
    clearInterval(iD)
    cont = false
}
function parar() {
    clearInterval(iD)
    hh = 0;
    mm = 0;
    ss = 0;
    atualiza()
    cont = false
}

// Para reutilizar a função Iniciar, utilizaremos o parametro passado através do HTML nas linhas 19 e 29, "e". Se true: execute a função do cronometro e se false execute o temporizador!
function timer(e) {
    if (e == true) {
        ss++

        if (ss == 60) {
            ss = 0
            mm++
        }
        if (mm == 60) {
            mm = 0
            hh++
        }
    }
    
        // temporizador

    if (e == false) {     
        if(ss && !mm && !hh){
            ss--
        }
        if(!ss && mm && !hh || ss && mm && !hh){
            if(ss == 0){
                ss = 60
                mm --
            }
            ss--
        }
        if(!ss && !mm && hh || !ss && mm && hh){
            if(mm == 0){
                mm = 60 
                hh --
            }
            mm -- 
            ss = 60
            ss --
        }
        if(ss && !mm && hh){
            if(ss == 0){
                ss = 60
                mm = 60
                mm --
                hh --
            }
            ss--
        }
        if(ss && mm && hh){
            if(ss == 0){
                ss = 60
                mm --
            }
            ss--
        }
        // checando o fim do tempo
        if (ss == 0 && mm == 0 && hh == 0) {
            atualiza()
            clearInterval(iD)
            cont = false
            alert("Acabou o tempo!")
        }
        
    }
    atualiza()
}


function atualiza() {
    let formato = `${(hh < 10) ? '0' + hh : hh}:${(mm < 10) ? '0' + mm : mm}:${(ss < 10) ? '0' + ss : ss}`
    document.getElementById('relogio').innerText = formato
}