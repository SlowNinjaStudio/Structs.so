import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../Constants";
import {DroidUIStructureViewPlayer} from "../ui/components/DroidUIStructureViewPlayer";
import {DragNDropDraggableItem} from "../vendor/DragNDrop/DragNDropDraggableItem";
import {DragNDropDroppableAreaLottie} from "../vendor/DragNDrop/DragNDropDroppableAreaLottie";

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

const footer = new Footer();
footer.init('footer-wrapper');

window.addEventListener('load', () => {
  const lottieElements = document.querySelectorAll('.car_defensive');
  for (let i = 0; i < lottieElements.length; i++) {
    console.log(lottieElements[i].style.display);
    lottieElements[i].style.display = 'none';
  }
  const draggableItems = [
    new DragNDropDraggableItem('draggableItemCarDefensiveShield'),
  ];

  for (let i = 0; i < draggableItems.length; i++) {
    draggableItems[i].init();
    for (let j = 0; j < lottieElements.length; j++) {
      draggableItems[i].addDragStartListener(lottieElements[j], function() {
        console.log('before drag start');
        const lottieElements = document.querySelectorAll('.car_defensive');
        for (let k = 0; k < lottieElements.length; k++) {
          lottieElements[k].style.display = 'none';
        }
      });
    }
  }

  const detailedItemViewDroppableArea = new DragNDropDroppableAreaLottie('structureViewPlayer');
  detailedItemViewDroppableArea.init();

  // const snapContainers = [
  //   new DragNDropSnapContainer('snapTargetBarrel', 'barrelStandard'),
  //   new DragNDropSnapContainer('snapTargetBarrel', 'barrelMuzzleBreak'),
  //   new DragNDropSnapContainer('snapTargetRecoil', 'recoilSpring'),
  //   new DragNDropSnapContainer('snapTargetRecoil', 'recoilHydraulic'),
  //   new DragNDropSnapContainer('snapTargetReceiver', 'receiverMechanical'),
  //   new DragNDropSnapContainer('snapTargetReceiver', 'receiverElectronic'),
  // ];
  //
  // const detailedItemViewDroppableArea = new DragNDropDroppableAreaAutoSnap('detailedItemViewDroppableArea');
  //
  // for (let i = 0; i < snapContainers.length; i++) {
  //   detailedItemViewDroppableArea.addSnapContainer(snapContainers[i]);
  // }
  //
  // detailedItemViewDroppableArea.init();
});

