//Variaveis de dados
var country = [], cases = [], todayCases = [], deaths = [],todayDeaths = [], recovered = [], active = [], critical = [];
var casesPerOneMillion = [], deathsPerOneMillion = [], totalTests = [];
var dadosApi = [];
var done = false;
var attDados;
var tempoCD = 500;

//Variaveis dos elementos HTML
var boardPrincipal = document.getElementById('boardPrincipal');
var select = document.getElementById('paises');
var spin = document.getElementById('spiner');
var inputCasos = document.getElementById('inputCasos');
var inputCasosHoje = document.getElementById('inputCasosHoje');
var inputAtivos = document.getElementById('inputAtivos');
var inputMortes = document.getElementById('inputMortes');
var inputMortesHoje = document.getElementById('inputMortesHoje');
var inputCritico = document.getElementById('inputCritico');
var inputRecuperados = document.getElementById('inputRecuperados');


boardPrincipal.classList.add('tipoNulo');
spin.classList.remove('tipoNulo');


carregaApi();
attDados = setInterval(() => {
    carregaVariaveis();
}, tempoCD);

setTimeout(function(){
    alimentaSelect();
    boardPrincipal.classList.remove('tipoNulo');
    boardPrincipal.classList.add('fadeIn');
    spin.classList.add('tipoNulo');
},5000)

function carregaApi(){
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((response) =>{
            if(!response.ok) throw new Error('Erro ao executar a requisição');
            return response.json();
        })
        .then((data) => {
            dadosApi = data;
            done = true;
        })
        .catch((erro) => {
            console.error(erro);
        })
}

function carregaVariaveis(){
    if(done){
        for(var i in dadosApi){
            country[i] = dadosApi[i].country;
            cases[i] = dadosApi[i].cases;
            todayCases[i] = dadosApi[i].todayCases;
            deaths[i] = dadosApi[i].deaths;
            todayDeaths[i] = dadosApi[i].todayDeaths;
            recovered[i] = dadosApi[i].recovered;
            active[i] = dadosApi[i].active;
            critical[i] = dadosApi[i].critical;
            casesPerOneMillion[i] = dadosApi[i].casesPerOneMillion;
            deathsPerOneMillion[i] = dadosApi[i].deathsPerOneMillion;
            totalTests[i] = dadosApi[i].totalTests;
        }
        console.log('done');
    }else{
        console.log('Requisição em andamento!')
    }
}

function alimentaSelect(){
    for(var i in dadosApi){
        var opt = document.createElement('option');
        opt.innerHTML = country[i];
        select.appendChild(opt);
    }
    alimentaInputs();
}

function alimentaInputs(){
    for(var i in dadosApi){
        if(select.value == country[i]){
            inputCasos.innerHTML = cases[i]
            inputCasosHoje.innerHTML = todayCases[i]
            inputMortes.innerHTML = deaths[i]
            inputMortesHoje.innerHTML = todayDeaths[i]
            inputRecuperados.innerHTML = recovered[i]
            inputAtivos.innerHTML = active[i]
            inputCritico.innerHTML = critical[i]
        }
    }
}