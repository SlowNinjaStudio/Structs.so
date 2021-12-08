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
  [AMBITS.LAND, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.POWER, FEATURES.ENGINEERING],
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

const footer = new Footer();
footer.init('footer-wrapper');
