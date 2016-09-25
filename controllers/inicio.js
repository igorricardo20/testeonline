module.exports = function(app){
	
	var ControladorInicio = {
		index: function(req,res){
			res.render('inicio/index');
		}
	}

	return ControladorInicio;
}