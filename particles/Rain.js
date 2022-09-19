function Rain(x, y, dx, dy, opacity, ctx) {
  this.x = x;
  this.y = y;
  this.dx = dx; // wind speed
  this.dy = dy; // vertical speed of rainfall
  this.opacity = opacity;

  this.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(255,255,255,${opacity})`;
    ctx.lineWidth = 3;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 5, this.y + 10);
    ctx.stroke();
  };

  this.update = function () {
    if (this.y > innerHeight) {
      this.y = 0;
    }

    if (this.x > innerWidth) {
      this.x = 0;
    }
    this.x += this.dx;
    this.y += dy;
    this.draw();
  };
}

export default Rain;
