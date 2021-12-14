import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../Constants";
import {StructureLottieAnimationSVG} from "../art_rendering/lottie/StructureLottieAnimationSVG";
import {LottieCustomPlayer} from "../art_rendering/lottie/LottieCustomPlayer";
import {DroidUIAmbitButtonPanel} from "../ui/components/DroidUIAmbitButtonPanel";

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

const stationIdleSpace = new StructureLottieAnimationSVG(
  'STATION_IDLE_SPACE',
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

const stationIdleSky = new StructureLottieAnimationSVG(
  'STATION_IDLE_SKY',
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

const stationIdleLand = new StructureLottieAnimationSVG(
  'STATION_IDLE_LAND',
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

const stationIdleWater = new StructureLottieAnimationSVG(
  'STATION_IDLE_WATER',
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
  lottiePlayer.registerAnimation(stationIdleSpace);
}
if (station1.hasAmbitSky()) {
  lottiePlayer.registerAnimation(stationIdleSky);
}
if (station1.hasAmbitLand()) {
  lottiePlayer.registerAnimation(stationIdleLand);
}
if (station1.hasAmbitWater()) {
  lottiePlayer.registerAnimation(stationIdleWater);
}
lottiePlayer.init('', true);

const panel = new DroidUIAmbitButtonPanel(
  station1,
  lottiePlayer
);
panel.init('ambitButtonPanel');

const footer = new Footer();
footer.init('footer-wrapper');
