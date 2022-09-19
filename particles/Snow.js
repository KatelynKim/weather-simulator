function Snow(x, y, dx, dy, radius, opacity, ctx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.opacity = opacity;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255,255,255, ${this.opacity})`;
    ctx.fill();
  };

  this.update = function () {
    if (this.y - this.radius > innerHeight) {
      this.y = -radius;
    }

    if (this.x - this.radius > innerWidth) {
      this.x = 0;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

export default Snow;
