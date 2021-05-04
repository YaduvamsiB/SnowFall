class Snow {
  constructor(x, y) {
    var options = {
      restitution: 0.1,
      friction: 0.1,
    };
    this.body = Bodies.circle(x, y, 5, options);
    World.add(world, this.body);

    this.image = loadImage("snow4.webp");
  }
  display() {
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 30, 30);
  }
  update() {
    if (this.body.position.y > height) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 800),
        y: random(-10, 100),
      });
    }
  }
}
