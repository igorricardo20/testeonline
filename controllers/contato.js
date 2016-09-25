module.exports = function(app){
	
	var ControladorContato = {
		index: function(req,res){
			res.render('contato/index');
		}
	}

	return ControladorContato;
}