img = "";
status1 = "";

function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(640, 420);
    video.center();
    canvas = createCanvas(570, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
        if(status1 != "")
        {
            for(i = 0; i < objects.length; i++) {
                document.getElementById("status1").innerHTML = "Status: Object Detected";
    
                r = random(255);
                g = random(255);
                b = random(255);
    
                fill(r, g, b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke(r, g, b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    
                objectDetector.detect(gotResult);
                document.getElementById("detected_objects").innerHTML = "Out of the big objects in the screen, the cocossd model has detected " + objects.length;
    
            } 
        }
    }

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function home() {
    window.location = "index.html";
}