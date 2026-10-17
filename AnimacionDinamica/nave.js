function Alien () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  this.width = 60;
  this.height = 60;

  this.image = new Image();
  this.image.src = "Kite-03.png";

  this.flame = new Image();
  this.flame.src = "Kite-04.png";
}

Alien.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  if (this.image.complete && this.image.naturalWidth > 0) {
    context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
  }

  if (this.showFlame && this.flame.complete && this.flame.naturalWidth > 0) {
    context.drawImage(this.flame, -this.flame.width/2, -this.flame.height/2);
  }

  context.restore();
};
