const video = document.getElementById('video')

function startvideo() {
	navigator.getUserMedia(
		{	
			video: {} },
		stream => video.srcObject = stream,
		err => console.error(err)
  )

}


  

startvideo();


/* function booster() {
	var Response =	prompt("please,Type your name!");
	alert("welcome" + ","+" " +Response + "."+ " " + "Please allow your camera" );
}

booster(); 

function myFunction(){
	alert('Thank you for sending your selfie.');

}
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} */


