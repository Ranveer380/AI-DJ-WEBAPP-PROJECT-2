function setup(){
    canvas=createCanvas(600,600);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center()
    poseNet=ml5.poseNet(video,modelLoaded);
    function modelLoaded(){
        console.log("PoseNet Is Initialized!");
    }
function preload(){
    song=loadsong("SleepwalkingAI DJ.mp3");
    song=loadsong("Monster AI DJ.mp3");
}

    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,600);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
    }
    
}

