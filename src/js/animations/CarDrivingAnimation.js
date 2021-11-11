export class CarDrivingAnimation {
  drivingScript() {
    return function () {
      this.context.drawImage(this.img, this.x, this.y);

      this.x--;
      if (this.x < -64) {
        this.x = this.canvas.width;
      }
    }
  }

  make() {
    return [
      new AnimatedImage(
        'mobile-car-chassis.png',
        this.drivingScript(),
        64,
        0
      ),
      new AnimatedImage(
        'mobile-car-land.png',
        this.drivingScript(),
        64,
        0
      )
    ];
  }
}
