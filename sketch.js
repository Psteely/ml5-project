// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;
let video;


function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  //img = loadImage('images/eagle.jpeg');
}

function setup() {
  canvas = createCanvas(1000, 900);
  canvas.parent('canvas');
  video = createCapture(VIDEO);
  video.hide();
  classifier.classify(video, gotResult);
  image(video, 0, 0);
}

function draw() {
  image(video, 0, 0, width, height);
  classifier.classify(video, gotResult);

}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    //console.log(results);

    const labelP = document.getElementById("label")
    labelP.innerText = "Label: " + results[0].label;

    const confidenceP = document.getElementById("confidence");
    confidenceP.innerText = "Confidence: " + results[0].confidence;


  }
}