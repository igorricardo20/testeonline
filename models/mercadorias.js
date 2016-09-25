var mongoose = require('mongoose');

module.exports = function(){

	var mercadoriaSchema = mongoose.Schema({
		tipo: {type: String, trim: true},
		nome : {type: String, trim: true},
		quantidade: {type: Number, trim:true},
		preco: {type: String, trim:true},
		negocio: {type: String},
		data_cadastro: {type: Date, default: Date.now}
	});

	return mongoose.model('Mercadorias',mercadoriaSchema);
}