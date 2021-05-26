const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world;
var engine;
var canvas;
var bg;
var state = "image";
var response,responseJSON,time,timezone,client_ip,day_of_week,day_of_year,week_number;
var hour,minutes,seconds;

function preload() {
    getTime();

}


function setup() {
    canvas = createCanvas(windowWidth-10,windowHeight-10);

    engine = Engine.create();
    world = engine.world;

}


function draw() {
    if(bg){
        background(bg);

        fill("black");
        textSize(30);
        text("Time: "+ hour + ":" + minutes + ":" + seconds ,(windowWidth/10)-80,(windowHeight/10)-50);
        }
    else if (!bg) {
      background("aqua");
      fill("Orange");
      textSize(50);
      text("Please wait!" ,(windowWidth/2)-100,(windowHeight/2)-70);
      fill("Blue");
      textSize(30);
      text("Fetching data from API to give output" ,(windowWidth/3)+100,(windowHeight/2));
    }


    Engine.update(engine);

    drawSprites();
}

async function getTime() {

     response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

     responseJSON = await response.json();

     time = responseJSON.datetime;

     timezone = responseJSON.timezone;

     client_ip = responseJSON.client_ip;

     day_of_week = responseJSON.day_of_week;

     day_of_year = responseJSON.day_of_year;

     week_number = responseJSON.week_number;

     hour = time.slice(11,13);

     minutes = time.slice(14,16);

     seconds = time.slice(17,19);

    console.log(hour);

    if(hour >= 4 && hour <= 5){
        var  backgroundImg = "IMAGES/sunrise1.png";
     }

     else if(hour >= 5 && hour <=6){
        var  backgroundImg = "IMAGES/sunrise2.png";
     }

     else if(hour >= 6 && hour <= 8){
        var  backgroundImg = "IMAGES/sunrise3.png";
     }

     else if(hour >= 8 && hour <= 10){
         var backgroundImg = "IMAGES/sunrise4.png";
     }

     else if(hour >= 10 && hour <= 12){
         var backgroundImg = "IMAGES/sunrise5.png";
     }

     else if(hour >= 12 && hour <= 15){
         var backgroundImg = "IMAGES/sunrise6.png";
     }

     else if(hour >= 15 && hour <= 16){
         var  backgroundImg = "IMAGES/sunset7.png";
     }

     else if(hour >= 16 && hour <= 17){
      var  backgroundImg = "IMAGES/sunset8.png";
     }


     else if(hour >= 17 && hour <= 18){
       backgroundImg = "IMAGES/sunset10.png";
     }

     else if(hour >= 18 && hour <= 20){
       backgroundImg = "IMAGES/sunset11.png";
     }

     else{
          backgroundImg="IMAGES/sunset12.png";
     }

     bg = loadImage(backgroundImg);
     console.log(bg);
}
