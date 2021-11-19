export class ExplosionEffectUtil {
  constructor(
    context,
    strokeStyle = '#ffff00',
    shadowColor = '#aaaa00',
    showBlur = 4,
    fillStyleAir = '#ffff99',
    fillStyleGround = '#ffffcc'
  ) {
    this.context = context;
    this.strokeStyle = strokeStyle;
    this.shadowColor = shadowColor;
    this.showBlur = showBlur;
    this.fillStyleAir = fillStyleAir;
    this.fillStyleGround = fillStyleGround;
  }

  initStroke() {
    this.context.strokeStyle = this.strokeStyle;
    this.context.shadowColor = this.shadowColor;
    this.context.shadowBlur = this.showBlur;
  }

  drawFlash(width, height, alpha) {
    this.context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    this.context.fillRect(0, 0, width, height);
  }

  drawExplosion(x, y, radiusX, radiusY) {
    this.context.fillStyle = this.fillStyleGround;
    this.context.beginPath();
    this.context.ellipse(x, y, radiusX, radiusY, Math.PI, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill();

    this.context.fillStyle = this.fillStyleAir;
    this.context.beginPath();
    this.context.ellipse(x, y, radiusX, radiusX, Math.PI, 0, Math.PI);
    this.context.stroke();
    this.context.fill();
  }

  drawShockwave(x, y, radiusX, radiusY) {
    this.context.beginPath();
    this.context.ellipse(x, y, radiusX, radiusY, Math.PI, 0, 2 * Math.PI);
    this.context.stroke();

    this.context.beginPath();
    this.context.ellipse(x, y, radiusX, radiusX, Math.PI, 0, Math.PI);
    this.context.stroke();
  }
}
