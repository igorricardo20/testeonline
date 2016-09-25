module.exports = function(app){

	var contato = app.controllers.contato;
	app.route('/contato').get(contato.index);
}