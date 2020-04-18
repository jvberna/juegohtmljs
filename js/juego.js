var ctx;
var FPS = 50;
var canvas;

var imgRex;

function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // Cargamos la imgen del dinosaurio

    imgRex = new Image();
    imgRex.src="img/dino.png";

    setInterval(function(){
        principal();
    },1000/FPS);

}

// Creamos una clase que dibuja una imagen
var protagonista = function(x,y){
    this.x = x;
    this.y = y;
    this.velocidad = 3;

    // Dibujar una imagen como protagonista
    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y)
    }
    // dibujar texto dentro del canvs
    this.texto = function(){
        ctx.font = "30px impact";
        ctx.fillStyle = "#555555";
        ctx.fillText('x:'+this.x+" y:"+this.y, 10,400);
    }

    // métodos para mover el personaje
    this.arriba = function(){
        this.y -= this.velocidad;
    }

    this.abajo = function(){
        this.y += this.velocidad;
    }

    this.derecha = function(){
        this.x += this.velocidad;
    }

    this.izquierda = function(){
        this.x -= this.velocidad;
    }

}

var personaje = function(x,y,ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.derecha = true;

    this.dibuja = function(){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }

    

    this.mueve = function(velocidad){
        if (this.derecha==true) {
            if (this.x < (500 - (this.ancho + velocidad))) {
                this.x += velocidad;
            } else {
                this.derecha = false;
            }
        } else {
            if (this.x > velocidad) {
                this.x -= velocidad;
            } else {
                this.derecha = true;
            }

        }
    }
}

var per1 = new personaje(300, 100, 50, 50);
var per2 = new personaje(10, 200, 50, 40);
var per3 = new personaje(150, 300, 50, 60);
var prota = new protagonista(200,200);

// Añadimos un listner para el teclado, a pelo
document.addEventListener('keydown',function(tecla){
    //console.log(tecla.keyCode);
    // Arriba 38
    if (tecla.keyCode==38) {
        prota.arriba();
    }

    // Abajo 40
    if (tecla.keyCode==40) {
        prota.abajo();
    }
    // Izquierda 37
    if (tecla.keyCode==37) {
        prota.izquierda();
    }
    // Derecha 39
    if (tecla.keyCode==39) {
        prota.derecha();
    }
});


function borrarcanvas(){
    canvas.width = 500;
    canvas.height = 400;
}

function principal() {
    borrarcanvas();
    
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();

    per1.mueve(1);
    per2.mueve(5);
    per3.mueve(3);

    prota.dibuja();
    prota.texto();
}