var app = require('./app_config.js');  
var NomeVagasController = require('./controllers/NomeVagasController.js');

app.get('/', function(req, res){

	res.json('Bem vindo a API de empregos e cidades');
});

app.get('/nomeVaga/:titulo', function(req, res){ 

	var titulo = req.params.titulo;

	NomeVagasController.get(titulo, function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/getAll', function(req, res){ 
	NomeVagasController.getAll( function(resp) { 
											 
		res.json(resp);					      
	});										  
});