function CreateBall(x, y, w) {
  this.cord = createVector(x, y);
  this.vel = p5.Vector.random2D().mult(random(1, 8));
  this.w = w
  this.color = random(360);

  this.move = function () {
    this.cord.add(this.vel);

    if (this.cord.x > width || this.cord.x < 0) {
      this.vel.x *= -1;
    }
    if (this.cord.y > height || this.cord.y < 0) {
      this.vel.y *= -1;
    }
  };

  this.distance = function (x, y) {
    return this.cord.dist(createVector(x, y));
  };

  this.show = function () {
    fill(this.color, 360, 360);
    ellipse(this.cord.x, this.cord.y, this.w);
  };
}

let balls = [];

function setup() {
  createCanvas(200 , 200);
  colorMode(HSB, 360);
  for (let i = 0; i < 3; i++) {
    balls.push(new CreateBall(random(width), random(height), random(5, 50)));
  }
}

function draw() {
  background(69, 228, 322);
  loadPixels()
  for (let item of balls) {
    item.show();
    item.move();
  }
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let sum = 0;
      for (let item of balls) {
        sum += 228 * item.w / item.distance(x, y)
      }
      set(x, y, color(sum, 360, 322))
    }
    
  }
  updatePixels()

  
}
