const imagen = document.querySelector(".img");
const imagenLight = document.querySelector(".añadir-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const menu1 = document.querySelector(".menu");

imagen.addEventListener("click", ()=>{
	aparecerImagen(imagen.getAttribute("src"));
})

contenedorLight.addEventListener("click", (e)=>{
	if(e.target !== imagenLight){
		contenedorLight.classList.toggle("show");
		imagenLight.classList.toggle("showimage"); 
		menu1.style.opacity = "1";
	}
})

const aparecerImagen = (imagen)=>{
	imagenLight.src = imagen;
	contenedorLight.classList.toggle("show");
	imagenLight.classList.toggle("showimage");
	menu1.style.opacity = "0";
}


