function gerarChave(){
  return 20;
}

function codificar(v,k){
  return v;
}

function salvar(){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  var chave_secreta = gerarChave();
  window.localStorage.setItem('display_name',codificar(params.display_name,chave_secreta));
  window.localStorage.setItem('first_name',codificar(params.first_name,chave_secreta));
  window.localStorage.setItem('last_name',codificar(params.last_name,chave_secreta));
  window.localStorage.setItem('father_name',codificar(params.father_name,chave_secreta));
  window.localStorage.setItem('mother_name',codificar(params.mother_name,chave_secreta));
  window.localStorage.setItem('bio',codificar(params.bio,chave_secreta));
  window.localStorage.setItem('gender',codificar(params.gender,chave_secreta));
  window.localStorage.setItem('pronouns',codificar(params.pronouns,chave_secreta));
  window.localStorage.setItem('marital',codificar(params.marital,chave_secreta));
  window.localStorage.setItem('race',codificar(params.race,chave_secreta));
  window.localStorage.setItem('sex_orientation',codificar(params.sex_orientation,chave_secreta));

  window.localStorage.setItem('id_number',codificar(params.id_number,chave_secreta));
  window.localStorage.setItem('doc_number',codificar(params.doc_number,chave_secreta));
  window.localStorage.setItem('emiss',codificar(params.emiss,chave_secreta));
  window.localStorage.setItem('emiss_state',codificar(params.emiss_state,chave_secreta));

  window.localStorage.setItem('email',codificar(params.email,chave_secreta));
  window.localStorage.setItem('phone',codificar(params.phone,chave_secreta));

  window.localStorage.setItem('cep',codificar(params.cep,chave_secreta));
  window.localStorage.setItem('city',codificar(params.city,chave_secreta));
  window.localStorage.setItem('district',codificar(params.district,chave_secreta));
  window.localStorage.setItem('state_name',codificar(params.state_name,chave_secreta));
  window.localStorage.setItem('state_regex',codificar(params.state_regex,chave_secreta));
  window.localStorage.setItem('country_name',codificar(params.country_name,chave_secreta));
  window.localStorage.setItem('country_regex',codificar(params.country_regex,chave_secreta));
  window.localStorage.setItem('address',codificar(params.address,chave_secreta));
  window.localStorage.setItem('address_number',codificar(params.address_number,chave_secreta));

  window.localStorage.setItem('website',codificar(params.website,chave_secreta));
  window.localStorage.setItem('linkedin',codificar(params.linkedin,chave_secreta));
  window.localStorage.setItem('instagram',codificar(params.instagram,chave_secreta));

  var el = document.getElementById("formInfo");
  el.innerHTML = "Dados atualizados com sucesso!";
  el.classList.add("ativo");
  window.location.href = "#topo";
}