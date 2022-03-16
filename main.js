var hh = 0;
var mm = 0;
var ss = 0;
var iD;

function inicio() {
    iD = setInterval(() => { timer() }, 1000)
}
function pause() {
    clearTimeout(iD)
}
function parar() {
    clearInterval(iD)
    hh = 0;
    mm = 0;
    ss = 0;
    atualiza()
}
function timer() {
    ss++

    if (ss == 60) {
        ss=0
        mm++
    }
    if (mm == 60) {
        mm=0
        hh++
    }
    atualiza()
}
function atualiza(){
    let formato = `${(hh < 10) ? '0' + hh:hh}:${(mm < 10) ? '0' + mm:mm}:${(ss < 10) ? '0' + ss:ss}`
    document.getElementById('relogio').innerText = formato
}