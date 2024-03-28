let capture;
let posenet;
let frame;
let nosex, noseY;
let reyex, reyeY;
let leyex, leyeY;
let singlePose;
let skeleton;
let actor_img=null;
function setup() {
    frame=createCanvas(600, 400);
    frame.parent('frame-container');

    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose', receivedPoses);

}

function receivedPoses(poses) {
    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    image(capture, 0, 0);
    fill(0, 255, 0);
     
    
    if (singlePose) {
        for (let i = 5; i < singlePose.keypoints.length; i++) {
            
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
            print(singlePose.keypoints[i].position.x, singlePose.keypoints[ i].position.y)
        }
        
    stroke(255, 255, 255);
    strokeWeight(5);
    for (let j = 0; j < skeleton.length; j++) {
        line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x,skeleton[j][1].position.y) 
}
if(singlePose.nose && singlePose.leftEye && singlePose.rightEye){
    let leftEyeX = singlePose.leftEye.x;
    let leftEyeY = singlePose.leftEye.y;
    let rightEyeX = singlePose.rightEye.x;
    let rightEyeY = singlePose.rightEye.y;
    let d = dist(leftEyeX, leftEyeY, rightEyeX, rightEyeY);
    let eyeCenterX = (leftEyeX + rightEyeX) / 2;
    let eyeCenterY = (leftEyeY + rightEyeY) / 2;

}

}
  
}


