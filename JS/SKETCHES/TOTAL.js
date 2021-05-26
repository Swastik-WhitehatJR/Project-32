const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var ampm;

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
    if(hour >= 4 && hour <= 5){
      var  bg = "sunrise1.png";
   }
   else if(hour >= 5 && hour <=6){
   var     bg = "sunrise2.png";
   }
   else if(hour >= 6 && hour <= 8){
      var  bg = "sunrise3.png";
   }
   else if(hour >= 8 && hour <= 10){
       var bg = "sunrise4.png";
   }
   else if(hour >= 10 && hour <= 12){
       var bg = "sunrise5.png";
   }
   else if(hour >= 12 && hour <= 15){
       var bg = "sunrise6.png";
   }
   else if(hour >= 15 && hour <= 16){
       var  bg = "sunset7.png";
   }
   else if(hour >= 16 && hour <= 17){
    var  bg = "sunset8.png";
   }

   else if(hour >= 17 && hour <= 18){
     bg = "sunset10.png";
   }

   else if(hour >= 18 && hour <= 20){
     bg = "sunset11.png";
   }

   else{
        bg="sunset12.png";
   }
   backgroundimage = loadImage(bg);
    console.log(hour);

}

function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}
