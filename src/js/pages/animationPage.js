import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../constants";
import {StructureLottieAnimationSVG} from "../art_rendering/lottie/StructureLottieAnimationSVG";

const instance = new Instance();
await instance.init();

const page = 'animation';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const station1 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.POWER, FEATURES.ENGINEERING, FEATURES.DEFENSIVE],
  10
);
station1.build_rate = 1;

const stationLottieAnimation = new StructureLottieAnimationSVG(
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

stationLottieAnimation.init(true);

const stationIdleSpace = new StructureLottieAnimationSVG(
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

stationIdleSpace.init(true);

const stationIdleSky = new StructureLottieAnimationSVG(
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

stationIdleSky.init(true);

const stationIdleLand = new StructureLottieAnimationSVG(
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

stationIdleLand.init(true);

const stationIdleWater = new StructureLottieAnimationSVG(
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

stationIdleWater.init(true);

const footer = new Footer();
footer.init('footer-wrapper');
