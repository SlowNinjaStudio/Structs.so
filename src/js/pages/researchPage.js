import {Navbar} from "./common/Navbar";
import {DroidUISchematicRDForm} from "../ui/components/DroidUISchematicRDForm"
import {Instance} from "../models/Instance";
import {Footer} from "./common/Footer";

const instance = new Instance();
await instance.init();

const page = 'research';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const schematic_design_form = new DroidUISchematicRDForm();
await schematic_design_form.init('schematic_rd_form');
schematic_design_form.initMainButtonEventListeners();
schematic_design_form.initOptionsEventListeners();

const footer = new Footer();
footer.init('footer-wrapper');
