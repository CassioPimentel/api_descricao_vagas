var db_string = 'mongodb://cassiowin98:eng1211048@ds233769.mlab.com:33769/nomevagas'; //string de conexao para o servidor mongo db

var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco')); //se houver algum erro, mostra na tela

db.once('open', function(){ //no evento de abertura da conexao, cria o esquema do banco

	var nomeVagasSchema = mongoose.Schema({
		titulo: String
	});

	exports.nomeVagas = mongoose.model('nomeVagas', nomeVagasSchema);
});
