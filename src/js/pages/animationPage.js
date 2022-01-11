import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../Constants";
import {DroidUIStructureViewPlayer} from "../ui/components/DroidUIStructureViewPlayer";

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

const car1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.DEFENSIVE],
  10
);
car1.build_rate = 1;
car1.range_defense = 450;

const city1 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.ENGINEERING, FEATURES.DEFENSIVE, FEATURES.POWER],
  250
);
station1.build_rate = 100;

const mech1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.ENGINEERING, FEATURES.POWER],
  250
);
mech1.build_rate = 100;

const structureViewPlayer = new DroidUIStructureViewPlayer(car1, 'structureViewPlayer');
structureViewPlayer.init();

// window.lottie.loadAnimation({
//   container: document.getElementById('structureViewPlayer'), // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: '/lottie/test/defensive-test.json' // the path to the animation json
// });

const footer = new Footer();
footer.init('footer-wrapper');
