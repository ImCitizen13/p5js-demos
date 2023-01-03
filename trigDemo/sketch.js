// Create a new canvas to the browser size
function setup () {
    createCanvas(windowWidth, windowHeight);
    
    // We set the background to black when the canvas is setup
    background(0);
  }
  
  // On window resize, update the canvas size
  function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
    
    // We also set the background to black when the canvas is resized
    // This is because resizing the canvas clears it to white
    background(0);
  }
  
  // Render loop that draws shapes with p5
  function draw(){
    // This is a trick to create a motion blur,
    // Instead of clearing each frame with pure black,
    // we use black with (N/255)% opacity
    background(0, 0, 0, 20);
    
    // Use the minimum screen size for relative rendering
    const dim = Math.min(width, height);
    
    // Disable fill and set up a stroke
    noFill();
    strokeWeight(dim * 0.015);
    stroke(255);
    
    // The equation for an arc is like so:
    // (x, y) + (sin(angle), cos(angle)) * radius
  
    // Get time in seconds
    const time = millis() / 1000;
    
    // How fast we will spin around
    const speed = 0.25;
    
    // Scale by 2PI, i.e. a full arc/circle
    const angle = time * PI * 2.0 * speed;
    
    // The center of the screen
    const cx = width / 2;
    const cy = height / 2;
  
    // Get the XY position on a unit arc using trigonometry
    const u = Math.cos(angle);
    const v = Math.sin(angle);
  
    // Choose the size of the arc we will draw
    const radius = dim * 0.25;
    
    // Get the final position
    const px = cx + u * radius;
    const py = cy + v * radius;
  
    // This is the radius for the actual shape/ellipse we will draw
    const r = dim * 0.1;
    
    // Finally draw the circle
    ellipse(px, py, r, r);
  }
  