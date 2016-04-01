alert('SceneScene4aF2.js loaded');

function SceneScene4aF2() {

};

SceneScene4aF2.prototype.initialize = function () {
	alert("SceneScene4aF2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	var filtro = "No";
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				var votos = data.result[0].xml.resultado.votaciones.votacion;
				var totalInsertados = 0;
				for (var i = 0; i < votos.length; i++) {
					if(votos[i].voto == filtro){
						totalInsertados++;
						if(totalInsertados>90){
							$("#SceneScene4aF2 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
								'+votos[i].diputado+' - '+votos[i].grupo+'</div>');
						}
					}
				}
			},
			error: function(){
				alert('error');
			}
		});
};

SceneScene4aF2.prototype.handleShow = function (data) {
	alert("SceneScene4aF2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene4aF2.prototype.handleHide = function () {
	alert("SceneScene4aF2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene4aF2.prototype.handleFocus = function () {
	alert("SceneScene4aF2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene4aF2.prototype.handleBlur = function () {
	alert("SceneScene4aF2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene4aF2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene4aF2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			sf.scene.hide('Scene4aF2');
			sf.scene.show('Scene4aF1');
			sf.scene.focus('Scene4aF1');
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene4aF2');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
