function gerarChave(){
  
  return k;
}

function codificar(v,k){
  return v;
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

var chave_secreta = "adsad";
window.localStorage.setItem('display_name',codificar(params.display_name,chave_secreta));
window.localStorage.setItem('first_name',codificar(params.first_name,chave_secreta));
window.localStorage.setItem('last_name',codificar(params.last_name,chave_secreta));
window.localStorage.setItem('full_name',codificar(params.full_name,chave_secreta));
console.log(first_name);