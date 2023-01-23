const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

function preload(){
    //carrega a imagem do fundo
    cenario = loadImage("fundo.gif");

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);


    angleMode(DEGREES);
    //cria um objeto da classe Torre
    torre = new Torre(160, 350,150,310);
    //cria um objeto da classe Canhao
    canhao = new Canhao(185,135,200,120);
    //crie o objeto da bala de canhão na posição do canhão

    
    rectMode(CENTER);
    imageMode (CENTER);
}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
    image(cenario, width/2, height/2, width, height)

    fill("green")
    rect(solo.position.x, solo.position.y, width, 10);
    //mostra o canhao
    canhao.show();
    //mostra a torre
    torre.show();
    //mostra a bala de canhão


}
//é aqui que faz a função keyPressed()
