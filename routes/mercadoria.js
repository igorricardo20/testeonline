module.exports = function(app){

	var mercadoria = app.controllers.mercadorias;

	app.route('/mercadorias')
		.get(mercadoria.index);
	app.route('/mercadorias/cadastro')
		.get(mercadoria.create)
		.post(mercadoria.post);

	app.route('/mercadorias/show/:id')
		.get(mercadoria.show);

	app.route('/mercadorias/delete/:id')
		.post(mercadoria.delete);

	app.route('/mercadorias/edit/:id')
		.get(mercadoria.edit)
		.post(mercadoria.update);

}