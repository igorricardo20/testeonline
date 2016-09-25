module.exports = function(app){
var validacao = require('../validacoes/mercadorias');
var Mercadoria = app.models.mercadorias;
	var ControleMercadoria = {

		index: function(req,res){
			
			Mercadoria.find(function(err,dados){

				if(err){
					req.flash('erro', 'Erro ao buscar: '+err);
					res.redirect('/mercadorias');
				}else{
					res.render('mercadorias/index', {lista: dados});		
				}
			});

		},
		create: function(req,res){
			res.render('mercadorias/cadastro');
		},

		post: function(req,res){

			if(validacao(req,res)){
				var model 		 = new Mercadoria();
				model.tipo 		 = req.body.tipo;
				model.nome 		 = req.body.nome;
				model.quantidade = req.body.quantidade;
				model.preco 	 = req.body.preco;
				model.negocio 	 = req.body.negocio;
				model.save(function(err){
					if(err){
						req.flash('erro','Erro ao cadastrar'+err);
						res.render('mercadorias/cadastro', {product: req.body});
					}else{
						req.flash('info','Mercadoria cadastrada com sucesso!');
						res.redirect('/mercadorias');

					}
				});
			}else{
				res.render('mercadorias/cadastro', {product: req.body});
			}
		},
		show: function(req,res){
			Mercadoria.findById(req.params.id, function(err, dados){
				if(err){
					req.flash('erro','Erro ao visualizar mercadoria:'+err);
					res.redirect('/mercadorias');
				}else{
					res.render('mercadorias/show', {dados: dados});

				}

			});
		},

		delete: function(req,res){
			Mercadoria.remove({_id:req.params.id}, function(err){
				if(err){
					req.flash('erro','Erro ao excluir mercadoria:'+err);
					res.redirect('/mercadorias');
				}else{
					req.flash('info','Mercadoria excluida com sucesso!');
					res.redirect('/mercadorias');
				}
			});
		},

		edit: function(req,res){
			Mercadoria.findById(req.params.id, function(err,data){
				if(err){
					req.flash('erro','Erro ao editar:'+err);
					res.redirect('/mercadorias');
				}else{
					res.render('mercadorias/edit', {dados: data});
				}

			});
		},

		update: function(req,res){
			Mercadoria.findById(req.params.id, function(err,data){
				var model 		 = data;
				model.tipo 		 = req.body.tipo;
				model.nome 		 = req.body.nome;
				model.quantidade = req.body.quantidade;
				model.preco 	 = req.body.preco;
				model.negocio	 = req.body.negocio;

				model.save(function(err){
					if(err){
						req.flash('erro','Erro ao editar:'+err);
					res.render('mercadorias/edit', {dados: model});
					}else{
						req.flash('info', 'Mercadoria atualizada com sucesso!');
						res.redirect('/mercadorias')
		
				
					}
				});
			});
		}
	}
	return ControleMercadoria;
}