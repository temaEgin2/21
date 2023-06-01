console.log("Test yandex panorama v0.1: OK");
ymaps.ready(init);
var x0 = 55.790927
var y0 = 49.114453
function init(){
	if (!ymaps.panorama.isSupported){
		console.log("API maps error1.");
	}
	
	 console .log("Ymaps: OK.");
	 ymaps.panorama.locate([x0,y0]).done(
		  function(panoramas){
			  console.log("panoramas: " + panoramas);
			  console.log("panoramas[0] " + panoramas[0]);
			  console.log("panoramas.length: " + panoramas.length);
			  if (panoramas.length > 0){
				  var player = new ymaps.panorama.Player(
					  "player",
					  panoramas[0],
					  {direction:[140,5]}
			  );
				  }
		  },
		
		  errorHendler() 
	 );
}
		 
function isPanoramasFound () {
	console.log("isPanoramasFound: called.");
}
function errorHendler () {
	console.log("errorHendler:called.");
}
