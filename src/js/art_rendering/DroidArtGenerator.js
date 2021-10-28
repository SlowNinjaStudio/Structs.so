/**
 * Assembles the art for a droid using images and layers.
 */
export class DroidArtGenerator {
  constructor() {
    this.imgDir = 'img/';
    this.droidDir = 'droids/';
    this.backgroundsDir = 'structures/backgrounds/';
  }

  /* Backgrounds */
  /**
   * @param {Array} layers
   */
  backgroundDefault(layers) {
    layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-space.png`)
  }

  /**
   * @param {Array} layers
   */
  backgroundLayerFilter(layers) {
    layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-lighten-15.png`);
  }

  /* Droid Body */
  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  body(layers, droid) {
    if (droid.hasBodyBlocky()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-body-blocky.png`);
    } else if (droid.hasBodyHumanoid()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-body-humanoid.png`);
    } else {
      layers.push(`${this.imgDir}${this.droidDir}droid-body-screen.png`);
    }
  }

  /**
   * @param {Array} layers
   */
  neck(layers) {
    layers.push(`${this.imgDir}${this.droidDir}droid-neck.png`);
  }

  /* Droid Head */
  /**
   * @param {Array} layers
   */
  headBlockyBase(layers) {
    layers.push(`${this.imgDir}${this.droidDir}droid-head-blocky.png`);
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headBlockyAccessory1(layers, droid) {
    if (droid.hasHeadAccessory1()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-blocky-vent.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headBlockyAccessory2(layers, droid) {
    if (droid.hasHeadAccessory2()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-blocky-antenna.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headBlockyAccessory3(layers, droid) {
    if (droid.hasHeadAccessory3()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-blocky-sensors.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headBlocky(layers, droid) {
    this.headBlockyBase(layers);
    this.headBlockyAccessory1(layers, droid);
    this.headBlockyAccessory2(layers, droid);
    this.headBlockyAccessory3(layers, droid);
  }

  /**
   * @param {Array} layers
   */
  headHumanoidBase(layers) {
    layers.push(`${this.imgDir}${this.droidDir}droid-head-humanoid.png`);
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headHumanoidAccessory1(layers, droid) {
    if (droid.hasHeadAccessory1()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-humanoid-mask.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headHumanoidAccessory2(layers, droid) {
    if (droid.hasHeadAccessory2()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-humanoid-chin-strap.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headHumanoidAccessory3(layers, droid) {
    if (droid.hasHeadAccessory3()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-humanoid-toupee.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headHumanoid(layers, droid) {
    this.headHumanoidBase(layers);
    this.headHumanoidAccessory1(layers, droid);
    this.headHumanoidAccessory2(layers, droid);
    this.headHumanoidAccessory3(layers, droid);
  }

  /**
   * @param {Array} layers
   */
  headScreenBase(layers) {
    layers.push(`${this.imgDir}${this.droidDir}droid-head-screen.png`);
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headScreenAccessory1(layers, droid) {
    if (droid.hasHeadAccessory1()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-screen-face.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headScreenAccessory2(layers, droid) {
    if (droid.hasHeadAccessory2()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-screen-cat-mod.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headScreenAccessory3(layers, droid) {
    if (droid.hasHeadAccessory3()) {
      layers.push(`${this.imgDir}${this.droidDir}droid-head-screen-antenna.png`);
    }
  }

  /**
   * @param {Array} layers
   * @param {Droid} droid
   */
  headScreen(layers, droid) {
    this.headScreenBase(layers);
    this.headScreenAccessory1(layers, droid);
    this.headScreenAccessory2(layers, droid);
    this.headScreenAccessory3(layers, droid);
  }

  /**
   * Generate the art for a given structure or schematic.
   * @param {Droid} droid
   */
  generate(droid) {
    let layers = [];
    this.backgroundDefault(layers);
    this.backgroundLayerFilter(layers);
    this.body(layers, droid);
    this.neck(layers);
    if (droid.hasHeadBlocky()) {
      this.headBlocky(layers, droid);
    } else if (droid.hasHeadHumanoid()) {
      this.headHumanoid(layers, droid);
    } else if (droid.hasHeadScreen()) {
      this.headScreen(layers, droid);
    }
    return layers;
  }
}
