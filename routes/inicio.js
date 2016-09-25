module.exports = function(app){

	var inicio = app.controllers.inicio;
	app.route('/').get(inicio.index);
}