import {DragNDropDraggableItem} from "../../src/js/vendor/DragNDrop/DragNDropDraggableItem";
import {DragNDropSnapContainer} from "../../src/js/vendor/DragNDrop/DragNDropSnapContainer";
import {DragNDropDroppableAreaAutoSnap} from "../../src/js/vendor/DragNDrop/DragNDropDroppableAreaAutoSnap";

window.addEventListener('load', () => {
  const draggableItems = [
    new DragNDropDraggableItem('barrelStandard'),
    new DragNDropDraggableItem('barrelMuzzleBreak'),
    new DragNDropDraggableItem('recoilSpring'),
    new DragNDropDraggableItem('recoilHydraulic'),
    new DragNDropDraggableItem('receiverMechanical'),
    new DragNDropDraggableItem('receiverElectronic')
  ];

  for (let i = 0; i < draggableItems.length; i++) {
    draggableItems[i].init();
  }

  const snapContainers = [
    new DragNDropSnapContainer('snapTargetBarrel', 'barrelStandard'),
    new DragNDropSnapContainer('snapTargetBarrel', 'barrelMuzzleBreak'),
    new DragNDropSnapContainer('snapTargetRecoil', 'recoilSpring'),
    new DragNDropSnapContainer('snapTargetRecoil', 'recoilHydraulic'),
    new DragNDropSnapContainer('snapTargetReceiver', 'receiverMechanical'),
    new DragNDropSnapContainer('snapTargetReceiver', 'receiverElectronic'),
  ];

  const detailedItemViewDroppableArea = new DragNDropDroppableAreaAutoSnap('detailedItemViewDroppableArea');

  for (let i = 0; i < snapContainers.length; i++) {
    detailedItemViewDroppableArea.addSnapContainer(snapContainers[i]);
  }

  detailedItemViewDroppableArea.init();
});
