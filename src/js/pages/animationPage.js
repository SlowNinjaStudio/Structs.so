import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../Constants";
import {StructureLottieAnimationSVG} from "../art_rendering/lottie/StructureLottieAnimationSVG";
import {LottieCustomPlayer} from "../art_rendering/lottie/LottieCustomPlayer";
import {DroidUIAmbitButtonPanel} from "../ui/components/DroidUIAmbitButtonPanel";
import {ANIMATION_NAMES} from "../AnimationNameConstants";

const instance = new Instance();
await instance.init();

const page = 'animation';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const station1 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.WATER, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.ENGINEERING, FEATURES.DEFENSIVE],
  10
);
station1.build_rate = 1;

const stationLottieAnimation = new StructureLottieAnimationSVG(
  'LOTTIE_DEMO',
  station1,
  'lottie-demo',
  {
    container: document.getElementById('lottie-demo'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/lottie/station/engineering/station-demo-data.json'
  }
);

stationLottieAnimation.init(false, true);

const idleSpace = new StructureLottieAnimationSVG(
  ANIMATION_NAMES.STATION.IDLE.SPACE,
  station1,
  'idle-space',
  {
    container: document.getElementById('idle-space'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/lottie/station/idle/space/station-idle-space.json'
  }
);

const idleSky = new StructureLottieAnimationSVG(
  ANIMATION_NAMES.STATION.IDLE.SKY,
  station1,
  'idle-sky',
  {
    container: document.getElementById('idle-sky'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/lottie/station/idle/sky/station-idle-sky.json'
  }
);

const idleLand = new StructureLottieAnimationSVG(
  ANIMATION_NAMES.STATION.IDLE.LAND,
  station1,
  'idle-land',
  {
    container: document.getElementById('idle-land'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/lottie/station/idle/land/station-idle-land.json'
  }
);

const idleWater = new StructureLottieAnimationSVG(
  ANIMATION_NAMES.STATION.IDLE.WATER,
  station1,
  'idle-water',
  {
    container: document.getElementById('idle-water'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/lottie/station/idle/water/station-idle-water.json'
  }
);

const lottiePlayer = new LottieCustomPlayer();
if (station1.hasAmbitSpace()) {
  lottiePlayer.registerAnimation(idleSpace);
}
if (station1.hasAmbitSky()) {
  lottiePlayer.registerAnimation(idleSky);
}
if (station1.hasAmbitLand()) {
  lottiePlayer.registerAnimation(idleLand);
}
if (station1.hasAmbitWater()) {
  lottiePlayer.registerAnimation(idleWater);
}
lottiePlayer.init('', true);

const panel = new DroidUIAmbitButtonPanel(
  station1,
  idleSpace.animationName,
  idleSky.animationName,
  idleLand.animationName,
  idleWater.animationName
);

document.getElementById('ambitButtonPanel').innerHTML = panel.render();
if (station1.hasAmbitSpace()) {
  lottiePlayer.registerPlayAnimationButton(panel.spaceButtonId, panel.spaceAnimationName);
}
if (station1.hasAmbitSky()) {
  lottiePlayer.registerPlayAnimationButton(panel.skyButtonId, panel.skyAnimationName);
}
if (station1.hasAmbitLand()) {
  lottiePlayer.registerPlayAnimationButton(panel.landButtonId, panel.landAnimationName);
}
if (station1.hasAmbitWater()) {
  lottiePlayer.registerPlayAnimationButton(panel.waterButtonId, panel.waterAnimationName);
}

const footer = new Footer();
footer.init('footer-wrapper');
