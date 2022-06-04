//numero aletaroio del dado
let numeroDado1 = Math.floor(Math.random()*6)+1;
let numeroDado2 = Math.floor(Math.random()*6)+1;
//fuentes de las imagenes
let imagenDado1 = "images/"+numeroDado1+".png";
let imagenDado2 = "images/"+numeroDado2+".png";
//ponemos el numero y mostrmaos el dado
document.querySelector(".img1").setAttribute("src", imagenDado1);
document.querySelector(".img2").setAttribute("src", imagenDado2);
