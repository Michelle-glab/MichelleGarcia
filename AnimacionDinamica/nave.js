function Nave () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  this.width = 284;
  this.height = 299;

  this.image = new Image();
  this.image.src = "Kite-03.png";

  this.flame = new Image();
  this.flame.src = "Kite-04.png";
}

Nave.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  if (this.image.complete && this.image.naturalWidth > 0) {
    context.drawImage(this.image, -this.width/2, -this.height/2, this.width, this.height);
  }

  if (this.showFlame && this.flame.complete && this.flame.naturalWidth > 0) {
    context.drawImage(this.flame, -this.flame.width/2, -this.flame.height/2);
  }

  context.restore();
};
