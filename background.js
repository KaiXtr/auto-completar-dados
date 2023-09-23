//Dados pessoais
var DISPLAY_NAME = window.localStorage.getItem("display_name");//"APELIDO";
var FIRST_NAME = window.localStorage.getItem("first_name");//"NOME";
var LAST_NAME = window.localStorage.getItem("last_name");//"SOBRENOME";
var FULL_NAME = FIRST_NAME + " " + LAST_NAME;
var FATHER_NAME = window.localStorage.getItem("father_name");//"PAI";
var MOTHER_NAME = window.localStorage.getItem("mother_name");//"MÃE";
var BIO = window.localStorage.getItem("bio");//"BIOGRAFIA LONGA";
var BIRTHDAY = window.localStorage.getItem("birthday");//"dd/mm/yyyy";
var DAY_REGEX = window.localStorage.getItem("day_regex");///1/g;
var MONTH_REGEX = window.localStorage.getItem("month_regex");///Março|março|march|March|3/g;
var YEAR_REGEX = window.localStorage.getItem("year_regex");///1600/g

//Gênero e etnia
var GENDER = window.localStorage.getItem("gender");//"Masculino";
var PRONOUNS = window.localStorage.getItem("pronouns");//"Ele/Dele";
var MARITAL_NAME = window.localStorage.getItem("marital_name");//"Solteiro";
var MARITAL_REGEX = /Solteiro|solteiro|solteira/g;
var RACE_REGEX = /Parda|Pardo|pardo|parda/g;
var SEX_ORIENTATION = window.localStorage.getItem("sex_orientation");//"Bissexual";

//Documentação
var ID_NUMBER = window.localStorage.getItem("id_number");//"";
var DOC_NUMBER = window.localStorage.getItem("doc_number");//"";
var EMISS = window.localStorage.getItem("emiss");//"";
var EMISS_STATE = window.localStorage.getItem("emiss_state");//"";

//Contato
var EMAIL = window.localStorage.getItem("email");//"exemplo@gmail.com";
var PHONE = window.localStorage.getItem("phone");//"112222233333";

//Endereço
var CEP = window.localStorage.getItem("cep");//"44444666";
var CITY = window.localStorage.getItem("city");//"CIDADE";
var DISTRICT = window.localStorage.getItem("district");//"BAIRRO";
var STATE_NAME = window.localStorage.getItem("state_name");//"ESTADO";
var STATE_REGEX = /UF|uf/g;
var COUNTRY_NAME = window.localStorage.getItem("country_name");//"PAÍS";
var COUNTRY_REGEX = /Pais|Pais/g;
var ADDRESS = window.localStorage.getItem("address");//"ENDEREÇO LONGO";
var ADDRESS_NUMBER = window.localStorage.getItem("address_number");//"Nro";

//Websites
var WEBSITE = "";
var LINKEDIN = window.localStorage.getItem("linkedin");//"https://www.linkedin.com/";
var INSTAGRAM = window.localStorage.getItem("instagram");//"https://instagram.com";

//Formações acadêmicas
var SCHOOL_NAME = "";
var SCHOOL_DEGREE = "";

//Idiomas
var LANGUAGE_REGEX = /English|Inglês|english|inglês/g;
var LANGUAGE_STATUS = /Fluente|fluente/g;

var inputs = document.getElementsByTagName("input");

Array.prototype.slice.call(inputs).forEach(el => {
    //Preenchendo caixas de texto
    if (el.type == "text") {
        //Preenchendo nome visível
        if (el.name.match(/display_name|displayName|maiden_name|maidenName/g) || el.id.match(/display_name|displayName|maiden_name|maidenName/g)) {
            el.value = DISPLAY_NAME;
        }
        //Preenchendo nome completo
        if (el.name.match(/name|fullName|full_name|f_nome|nome|FNAME/g) || el.id.match(/name|fullName|full_name|f_nome|nome|FNAME/g)) {
            el.value = FULL_NAME;
        }
        //Preenchendo primeiro nome
        if (el.name.match(/first_name|firstName|profile_name|\bnome\b|\bname\b/g) || el.id.match(/first_name|firstName|profile_name|\bnome\b|\bname\b/g)) {
            el.value = FIRST_NAME;
        }
        //Preenchendo último nome
        if (el.name.match(/last_name|lastName|sobrenome/g) || el.id.match(/last_name|lastName|sobrenome/g)) {
            el.value = LAST_NAME;
        }
        //Preenchendo nome completo do pai
        if (el.name.match(/nome_pai|pai/g) || el.id.match(/nome_pai|pai/g)) {
            el.value = FATHER_NAME;
        }
        //Preenchendo nome completo da mãe
        if (el.name.match(/nome_mae|mae/g) || el.id.match(/nome_mae|mae/g)) {
            el.value = MOTHER_NAME;
        }
        //Preenchendo data de nascimento
        if (el.name.match(/data_nascimento/g) || el.id.match(/data_nascimento/g)) {
            el.value = BIRTHDAY;
        }
        //Preenchendo gênero
        if (el.name.match(/Gender|gender/g) || el.id.match(/Gender|gender/g)) {
            el.value = GENDER;
        }
        //Preenchendo pronomes
        if (el.name.match(/Pronouns|pronouns/g) || el.id.match(/Pronouns|pronouns/g)) {
            el.value = PRONOUNS;
        }
        //Preenchendo estado civil
        if (el.name.match(/marital|estado_civil/g) || el.id.match(/marital|estado_civil/g)) {
            el.value = MARITAL_NAME;
        }
        //Preenchendo CPF
        if (el.name.match(/CPF|cpf/g) || el.id.match(/CPF|cpf/g)) {
            el.value = ID_NUMBER;
        }
        //Preenchendo RG
        if (el.name.match(/rg_nro|identidade/g) || el.id.match(/rg_nro|identidade/g)) {
            el.value = DOC_NUMBER;
        }
        //Preenchendo órgão emissor
        if (el.name.match(/orgao_rg|identidade_exp/g) || el.id.match(/orgao_rg|identidade_exp/g)) {
            el.value = EMISS;
        }
        //Preenchendo estado do órgão emissor
        if (el.name.match(/uf_rg|identidade_estado/g) || el.id.match(/uf_rg|identidade_estado/g)) {
            el.value = EMISS_STATE;
        }
        //Preenchendo email
        if (el.name.match(/email/g) || el.id.match(/email/g)) {
            el.value = EMAIL;
        }
        //Preenchendo telefone
        if (el.name.match(/PHONE|phone|tel1|whatsapp|CELULAR/g) || el.id.match(/PHONE|phone|tel1|whatsapp|CELULAR/g)) {
            el.value = PHONE;
        }
        //Preenchendo cep
        if (el.name.match(/cep/g) || el.id.match(/cep/g)) {
            el.value = CEP;
        }
        //Preenchendo localização
        if (el.name.match(/location/g) || el.id.match(/location/g)) {
            el.value = CITY + " - " + STATE + ", " + COUNTRY_NAME;
        }
        //Preenchendo endereço
        if (el.name.match(/ADDRESS|address|endereco/g) || el.id.match(/ADDRESS|address|endereco/g)) {
            el.value = ADDRESS;
        }
        //Preenchendo número do endereço
        if (el.name.match(/\bnumero\b/g) || el.id.match(/\bnumero\b/g)) {
            el.value = ADDRESS_NUMBER;
        }
        //Preenchendo cidade
        if (el.name.match(/city|cidade_nasc/g) || el.id.match(/city|cidade_nasc/g)) {
            el.value = CITY;
        }
        //Preenchendo bairro
        if (el.name.match(/district|bairro/g) || el.id.match(/district|bairro/g)) {
            el.value = DISTRICT;
        }
        //Preenchendo estado
        if (el.name.match(/state|estado|uf_nasc/g) || el.id.match(/state|estado|uf_nasc/g)) {
            el.value = STATE_NAME;
        }
        //Preenchendo país
        if (el.name.match(/country|pais_nasc/g) || el.id.match(/country|pais_nasc/g)) {
            el.value = COUNTRY_NAME;
        }
        //Preenchendo LinkedIn
        if (el.name.match(/linkedin|linkedIn/g) || el.id.match(/linkedin|linkedIn/g)) {
            el.value = LINKEDIN;
        }
        //Preenchendo Instagram
        if (el.name.match(/instagram/g) || el.id.match(/instagram/g)) {
            el.value = INSTAGRAM;
        }
        //Preenchendo nome da formação acadêmica
        if (el.name.match(/school/g) || el.id.match(/school/g)) {
            el.value = SCHOOL_NAME;
        }
        //Preenchendo grau da formação acadêmica
        if (el.name.match(/degree/g) || el.id.match(/degree/g)) {
            el.value = SCHOOL_DEGREE;
        }
    }
    //Preenchendo caixas de email
    if (el.type == "email") {
        el.value = EMAIL;
    }
    //Preenchendo checkboxes
    if (el.type == "checkbox") {
        //Aceitando política de privacidade
        if (el.name.match(/privacy/g) || el.id.match(/privacy/g)) {
            el.checked = true;
        }
    }
});

var textareas = document.getElementsByTagName("textarea");

Array.prototype.slice.call(textareas).forEach(el => {
    //Preenchendo biografia/descrição
    if (el.name.match(/Bio|profile_bio|description/g) || el.id.match(/Bio|profile_bio|description/g)) {
        el.innerHTML = BIO;
    }
    //Preenchendo endereço
    if (el.name.match(/ADDRESS|address|endereco/g) || el.id.match(/ADDRESS|address|endereco/g)) {
        el.innerHTML = ADDRESS;
    }
});

var selects = document.getElementsByTagName("select");

Array.prototype.slice.call(selects).forEach(el => {
    var opt = "";

    //Preenchendo dia de aniversário
    if (el.name.match(/day|dia_nasc/g) || el.id.match(/day|dia_nasc/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(DAY_REGEX)) {
                ch.selected = true;
                opt = ch.value;
            }
        });
        el.value = opt;
    }
    //Preenchendo mês de aniversário
    if (el.name.match(/month|mes_nasc/g) || el.id.match(/month|mes_nasc/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(MONTH_REGEX)) {
                ch.selected = true;
                opt = ch.value;
            }
        });
        el.value = opt;
    }
    //Preenchendo ano de aniversário
    if (el.name.match(/year|ano_nasc/g) || el.id.match(/year|ano_nasc/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(YEAR_REGEX)) {
                ch.selected = true;
                opt = ch.value;
            }
        });
        el.value = opt;
    }
    //Preenchendo estado civil
    if (el.name.match(/marital|estado_civil/g) || el.id.match(/marital|estado_civil/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(MARITAL_REGEX)) {
                ch.selected = true;
            }
        });
    }
    //Preenchendo raça ou etnia
    if (el.name.match(/race|raça|raca/g) || el.id.match(/race|raça|raca/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(RACE_REGEX)) {
                ch.selected = true;
                opt = ch.value;
            }
        });
        el.value = opt;
    }
    //Preenchendo estados
    if (el.name.match(/state|estado|uf_nasc/g) || el.id.match(/state|estado|uf_nasc/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option" && ch.innerHTML.match(STATE_REGEX)) {
                ch.selected = true;
                opt = ch.value;
            }
        });
        el.value = opt;
    }
    //Preenchendo países
    if (el.name.match(/country/g) || el.id.match(/country/g)) {
        Array.prototype.slice.call(el.childNodes).forEach(ch => {
            if (ch.name == "option") {
                if (ch.innerHTML.match(COUNTRY_REGEX)) {
                    ch.selected = true;
                }
                else {
                    ch.selected = false;
                }
            }
        });
    }
});

//Context Menus
browser.contextMenus.create({
    id: "mks-autocomplete",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["all"],
    }, onCreated
);
browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "mks-autocomplete":
            console.log(info.selectionText);
            break;
    }
});