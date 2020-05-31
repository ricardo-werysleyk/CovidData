//Variaveis de dados
var country = [], cases = [], todayCases = [], deaths = [],todayDeaths = [], recovered = [], active = [], critical = [];
var casesPerOneMillion = [], deathsPerOneMillion = [], totalTests = [];
var dadosApi = [];
var done = false;
var attDados;
var tempoCD = 1000;

//Variaveis dos elementos HTML
var inputCasos = document.getElementById('inputCasos');


carregaApi();
// attDados = setInterval(() => {
//     carregaVariaveis();
// }, tempoCD);

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