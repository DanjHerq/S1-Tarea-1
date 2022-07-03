//MENU
//creacion de menu para moviles mediante javasripc
const menu = document.querySelector(".menu");
//declaramos las varias const para optener  del boton un confimacion 
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
//creamos laa funcion Menu  del token
function toggleMenu() {
// verificamos que optiene el token si un true false
  menu.classList.toggle("menu_opened");
}
//utilizamos el evento addEventListerner para ver que datos optenemos al momento de dar click en nuestro botones
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
       const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
        
        if(entry.isIntersecting){
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
           }
    })
    
},{rooMargin:"-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
    
    const hash = menuLink.getAttribute("href");
    const targe = document.querySelector(hash);
    
    if(targe){
        observer.observe(targe);
    }
    
})


function getData(){
  //Optenemos  los datos nombre, email y mensaje  y le guardamos en variables para obtener el valor de nuestro formulario
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;
  
  /*
  verificamos  si los campos estan vacios o no, si estan vacios lanzara una alerta y no deja proseguir
  si los cmapos estan con datos la condicion se cumple y procesa el html descrito por los document.write()
  */
  

  if(nombre=='' ||  email=="" || mensaje==''){
    alert('Los campos estan vacíos ');
  }else if(validarEmail(email)){
  // me  dirige al archivo  enviar html donde se imprimira nuestro html de enviar
  window.location.replace('enviar.html');   
  //creacion de  html
  document.write('<!DOCTYPE html>');
  document.write('<html lang="en">');
  document.write('<head>');
  document.write('<meta charset="UTF-8">');
  document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
  document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  document.write('<link rel="stylesheet" href="css/enviar.css">');
  document.write('<title>Gracias</title>');
  document.write('</head>');
  document.write('<body>');
  document.write('<div class="contenedor">');
  document.write('<div class="conImg">');
  document.write('<img src="img/Foto Perfil.jpeg" alt="">');
  document.write('</div>');
  document.write('<p class="frase4">Gracias por su inscripcion, le<br/>le saluda Daniel Henríquez</p>');
  document.write('<p class="frase1"> '+nombre+' revise su correo '+email+' para confirmar su registro. </p>');
  document.write('<p class="frase2">Muchas gracias por su comentario:  '+mensaje+'.</p>');
  document.write('<div class="btn">');
  document.write('<a href="index.html">Aceptar </a>');
  document.write('</div>');
  document.write('</div>');
  document.write('</body>');
  document.write('</html>');
  
}else{
  window.location.replace('index.html');  
  alert("El email NO es correcto");
}
}


function soloLetras(e){
  key = e.keyCode || e.which;
/*
la sentencia String.fromCharCode(key) obteniene el caracter presionado por el usuario que 
añadiendo la sentencia toLowerCase() convertiríamos la letra a minúscula. Con esto 
guardamos la letra presionada por el usuario en la variable
*/
  tecla = String.fromCharCode(key).toLowerCase();

/*
guardamos en la variable “letras” las letras permitidas por nosotros. 
Guardamos los keyCode de las teclas especiales como (BackSpace , flecha izquierda, flecha derecha, Supr)

*/
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false
  /*
se busca si está la tecla presionada por el usuario en el array de teclas especiales “especiales”
  */
  for(var i in especiales){
       if(key == especiales[i]){
           tecla_especial = true;
           break;
       }
   }
/*
 hacemos uso de la propiedad indexOf() que averigua si una cadena se encuentra dentro de otra cadena
 devolviendo como valor la posición de la cadena encontrada o el valor de -1 si es que no la encuentra
 que para este caso queremos averiguar si el caracter presionado se encuentra entre las letras permitidas
*/
   if(letras.indexOf(tecla)==-1 && !tecla_especial){
       return false;
   }
}

function validarEmail(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}