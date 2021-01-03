//numeric
var a = 13;
console.log(a);

//string
var b = "Jahaan"
console.log(b);

//boolean
var c = true
console.log(c);

//undefined
var d;
console.log(d)

//null
var e = null;
console.log(e);

//array
var arr = [13,"Jahaan",false,28,"abc"];
console.log(arr);
console.log(arr.length);
console.log(arr[0])
arr.push([1,2,3])
console.log(arr);
console.log(arr[5][1]);
arr.pop()
console.log(arr);


//array inside array
var array = ["a",[true,"Jahaan",41,"oo"]]
//console.log(array)
//console.log(array.length);
//console.log(array[1]);
//console.log(array[1]);

var score = 0;
var gamestate = "stage1"


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var bi,platform,slingshot;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);
   
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new ssclass(bird.body,{x:200, y:50});

    //console.log(bird.body);
}

function draw(){
if(bi){
    background(bi);
}
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    pig3.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    

    bird.display();
    platform.display();

    slingshot.display();

    textSize(30);
    text("score:"+ score,1000, 50);

}

function mouseDragged(){
    if(gamestate==="stage1"){
        Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
    }  
}

function mouseReleased(){
    gamestate="stage2"
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        bird.path=[]
       slingshot.attach(bird.body); 
       Matter.Body.setPosition(bird.body, {x:200, y:50});
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsetype = await response.json();
    //console.log(responsetype);
    var datetime = responsetype.datetime
    //console.log(datetime);
    var hour = datetime.slice(11,13);
    //console.log(hour);

    if(hour<18 && hour>06){
        bi = loadImage("sprites/bg.png")
    }
    else{
        bi = loadImage("sprites/bg2.jpg")
    }
}