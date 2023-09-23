document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("first_name").addEventListener("oninput",completarNome);
    document.getElementById("last_name").addEventListener("oninput",completarNome);
    document.getElementById("gender").addEventListener("onchange",completarPronome);
    document.getElementById("id_number").addEventListener("oninput",formatarCPF);
});

function completarNome() {
    document.getElementById("full_name").value = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
};
function completarPronome() {
    var opt = document.getElementById("gender").value;
    if (opt < 3) {
        document.getElementById("pronouns").value = opt;
    }else{
        document.getElementById("pronouns").value = 3;
    }
}
function formatarCPF() {
    var txt = document.getElementById("id_number").value;
    if (txt.length == 4) {
        txt = txt.substring(0,3) + "." + txt.substring(3,6);
    }
    if (txt.length == 7) {
        txt = txt.substring(0,3) + "." + txt.substring(4,7) + "." + txt.substring(8,10);
    }
    if (txt.length == 11) {
        txt = txt.substring(0,3) + "." + txt.substring(4,7) + "." + txt.substring(8,11) + "-" + txt.substring(11,13);
    }
    if (txt.length > 14) {
        txt = txt.substring(0,14);
    }
    document.getElementById("id_number").value = txt;
}