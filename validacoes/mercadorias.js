var url = require('url');

module.exports = function(req,res){
	var createUrl = url.parse(req.url).pathname == "/mercadorias/cadastro";
	var updateUrl = !createUrl;

	req.assert('tipo', 'Informe o tipo da sua mercadoria.').notEmpty();
	req.assert('nome', 'Informe o seu nome.').notEmpty();
	req.assert('quantidade','Informe uma quantidade.').notEmpty();
	req.assert('preco','Informe um preço').notEmpty();
	req.assert('negocio','Informe um tipo de negócio(compra ou venda)').notEmpty();


	var validateErros = req.validationErrors() || [];

	if(validateErros.length > 0){
		validateErros.forEach(function(e){
			req.flash('erro', e.msg);
		});
	return false;
	}else{
		return true;
	}
	

}