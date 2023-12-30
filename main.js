function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(550, 150);

    model= ml5.poseNet(video, modelLoaded);
    model.on('pose', getPoses);
}
function draw(){
    background("aqua");
}
function modelLoaded(){
    console.log("Your model is Loaded");
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        
    }
}