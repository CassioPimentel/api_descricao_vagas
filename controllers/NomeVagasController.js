var db = require('../db_configNomeVagas.js');

exports.get = function(titulo, callback){

    var query = { titulo: new RegExp(titulo, "i") };
	db.nomeVagas.find(query, function(error, nomes) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(nomes);
		}

	});
};

exports.getAll = function( callback){
	console.log('teste111');
	db.nomeVagas.find({}, function(error, nomes) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			console.log('resultados');
			console.log(nomes);
			callback(nomes);
		}

	});
};
