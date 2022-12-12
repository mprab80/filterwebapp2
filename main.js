function preload(){

}
function setup(){
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on("pose",gotPoses) 
}
function gotPoses(results){
   console.log(results) ;
    if (results.length>0){
     console.log(results[0]);
    console.log(results[0]);
    }
    }
function modelLoaded(){
    console.log('model loaded hihihi');
}
function draw(){
    image(video,0,0,450,350);
}
camera1z = document.getElementById("camera");
 