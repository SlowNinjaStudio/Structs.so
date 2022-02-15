import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../Constants";
import {DroidUIStructureViewPlayer} from "../ui/components/DroidUIStructureViewPlayer";
import {LOTTIE_CUSTOM_EVENTS} from "../EventConstants";
import {DragNDropLottie} from "../vendor/DragNDrop/DragNDropLottie";

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
  [FEATURES.ATTACK, FEATURES.ENGINEERING, FEATURES.DEFENSIVE, FEATURES.POWER],
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
city1.build_rate = 100;

const mech1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.ENGINEERING, FEATURES.POWER],
  250
);
mech1.build_rate = 100;

const structureViewPlayer = new DroidUIStructureViewPlayer(car1, 'structureViewPlayer');
structureViewPlayer.init();

document.addEventListener(LOTTIE_CUSTOM_EVENTS.LOTTIE_AUTOPLAY, () => {
  const dragNDropLottie = new DragNDropLottie('structureViewPlayer');
  dragNDropLottie.linkDraggableItemToLottieElement('draggableItemCarDefensiveShield', '.car_defensive');
  dragNDropLottie.init();
});

const footer = new Footer();
footer.init('footer-wrapper');
