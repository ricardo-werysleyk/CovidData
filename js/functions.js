var casos, deaths, recovered;
var world = [];


carregaApi();

function carregaApi(){
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((response) =>{
            if(!response.ok) throw new Error('Erro ao executar a requisição');
            return response.json();
        })
        .then((data) => {
            world = data;
            console.log(world)
        })
        .catch((erro) => {
            console.error(erro);
        })
}

function casos(){
    console.log(world[0].todayCases);
}