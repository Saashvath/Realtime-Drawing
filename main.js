noseX=0
noseY=
difference=0
leftWristX=0
rightWristX=0
function preload(){


}


function setup(){

    video = createCapture(VIDEO)
    video.size(600,800)
    canvas = createCanvas(675,675)
    canvas.position(800,200)
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}



function draw(){

    background("#964B00")
    fill("#f5ef42")
    stroke("#6c42f5")
    square(noseX,noseY,difference)
    document.getElementById("span1").innerHTML = "Width and Height of a Square is " + difference + "px"
}

function modelLoaded(){

    console.log("Model has been sucessfuly loaded!")
    
}

function gotPoses(result){

    if( result.length >0){

        console.log(result)
        noseX =  result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY =" + noseY);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x 
        difference = floor(leftWristX - rightWristX)
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference =" + difference);
      
    }
}
