import {Navbar} from "./common/Navbar";
import {DroidUISchematicRDForm} from "../ui/components/DroidUISchematicRDForm"
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";
import {DroidUIModel} from "../ui/components/DroidUIModal";

const instance = new Instance();
await instance.init();

const page = 'research';

const modalBroke = new DroidUIModel(
  'you-broke-modal',
  'You Are Broke',
  `Patenting schematics requires watt and you don't have any. Are you sure you want to continue?`
    + ` What if you design something amazing and can't save it? Wouldn't that be sad?`,
  'That Is Sad',
  `Don't Care`
);
modalBroke.init('popup-modal-wrapper');

await instance.initActive();
instance.queryBalance().then(function(balance) {
  if (balance.amount < 1) {
    modalBroke.show();
  }
})

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const schematic_design_form = new DroidUISchematicRDForm();
await schematic_design_form.init('schematic_rd_form');
schematic_design_form.initMainButtonEventListeners();
schematic_design_form.initOptionsEventListeners();

const footer = new Footer();
footer.init('footer-wrapper');
