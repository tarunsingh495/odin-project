const keys=document.querySelectorAll(".key");
console.log("Hello");
function growFunction(event){
	 	console.log(event.keyCode);
		const key=document.querySelector(`div[data-key="${event.keyCode}"]`);
		const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
		if(!key) return;
		if(!audio) return;
		audio.currentTime=0;
		audio.play();
		key.classList.add("playing");
	
}

function endanimation(){
	this.classList.remove("playing");
}
keys.forEach(function(key){
	key.addEventListener("transitionend",endanimation);
})
window.addEventListener("keydown",growFunction);
