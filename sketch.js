var starImg,bgImg;
var star, starBody;
var fada, fadaImg, vozFada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg= loadImage("images/fairyImage1.png", "images/fairyImage2.png");
    vozFada= loadSound("soung/JoyMusic.mp3")

    
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozFada.playsound();

    //criar sprite de fada e adicionar animação para fada
    fada= createSprite(800,50);
    fada.addImage(fadaImg);
    fada.scale= 0.3;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    if (keyDown("LEFT_ARROW")) {
     fada.addImage("fairyImage1.png");
    }

    if (keyDown("RIGHT_ARROW")){
        fada.addImage("fairyImage2.png");
    }
    if (star.y> 470 && starBody.position.y> 470){
        Matter.Body.setStatic(starBody,true);
    }
       

    drawSprites();
}
